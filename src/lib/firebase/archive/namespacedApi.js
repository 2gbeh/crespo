import {
  doc,
  setDoc,
  serverTimestamp,
  query,
  where,
  getCountFromServer,
  getAggregateFromServer,
  sum,
} from "firebase/firestore";
import { db } from "..";

export const getDocRef = (collection, documentId, collectionOnly = false) => {
  let dbCollection = db.collection(collection);
  return collectionOnly ? dbCollection : dbCollection.doc(documentId);
};

export async function getCount(collection, whereClause) {
  let docRef = getDocRef(collection, null, true);
  //
  let snapshot;
  if (Array.isArray(whereClause) && whereClause.length === 3) {
    let [field, queryOperator, value] = whereClause;
    snapshot = await getCountFromServer(
      query(docRef, where(field, queryOperator, value)),
    );
  } else snapshot = await getCountFromServer(docRef);
  //
  return snapshot.data()?.count || 0;
}

export async function getSum(collection, field, whereClause) {
  let [docRef, aggregateFn] = [
    getDocRef(collection, null, true),
    { value: sum(field) },
  ];
  //
  let snapshot;
  if (Array.isArray(whereClause) && whereClause.length === 3) {
    let [field, queryOperator, value] = whereClause;
    snapshot = await getAggregateFromServer(
      query(docRef, where(field, queryOperator, value)),
      aggregateFn,
    );
  } else snapshot = await getAggregateFromServer(docRef, aggregateFn);
  //
  return snapshot.data()?.value || 0;
}

// GET ALL DOCS
export async function getAll(
  collection,
  orderBy = "createdAt",
  primaryKey = "uuid",
) {
  return getDocRef(collection, null, true)
    .orderBy(orderBy)
    .get()
    .then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) =>
        data.push({ ...doc.data(), [primaryKey]: doc.id }),
      );
      return data;
    })
    .catch((error) => error);
}

// GET PAGINATED DOCS
export async function getPaginated(
  collection,
  orderBy = "createdAt",
  limit = 10,
  offset = 0,
) {
  return getDocRef(collection, null, true)
    .orderBy(orderBy)
    .startAfter(offset)
    .limit(limit)
    .get()
    .then((querySnapshot) => {
      let [data, offset] = [
        [],
        querySnapshot.docs[querySnapshot.docs.length - 1],
      ];
      //
      querySnapshot.forEach((doc) =>
        data.push({ ...doc.data(), [primaryKey]: doc.id }),
      );
      return { data, meta: { offset } };
    })
    .catch((error) => error);
}

// GET RECENT DOCS
export async function getRecent(collection, orderBy = "createdAt", limit = 10) {
  return getDocRef(collection, null, true)
    .orderBy(orderBy, "desc")
    .limit(limit)
    .get()
    .then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) =>
        data.push({ ...doc.data(), [primaryKey]: doc.id }),
      );
      return data;
    })
    .catch((error) => error);
}

// GET DOC BY ID
export async function getById(collection, documentId) {
  return getDocRef(collection, documentId)
    .get()
    .then((doc) => doc.exists && doc.data())
    .catch((error) => error);
}

// GET DOC BY ID (REAL-TIME)
export function getById_Rt(collection, documentId) {
  let response = {};
  let unsubscribe = getDocRef(collection, documentId).onSnapshot(
    (doc) => (response = doc.data()),
    (error) => (response = error),
  );
  //
  unsubscribe();
  return response;
}

// GET DOCS WITH WHERE CLAUSE
export async function getWhere(
  collection,
  field,
  value,
  queryOperator = "==",
  primaryKey = "uuid",
) {
  return getDocRef(collection, null, true)
    .where(field, queryOperator, value)
    .get()
    .then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) =>
        data.push({ ...doc.data(), [primaryKey]: doc.id }),
      );
      return data;
    })
    .catch((error) => error);
}

// GET DOCS WITH WHERE CLAUSE (REAL-TIME)
export function getWhere_Rt(
  collection,
  field,
  value,
  queryOperator = "==",
  documentIdAs = "uuid",
) {
  let response = [];
  let unsubscribe = getDocRef(collection, null, true)
    .where(field, queryOperator, value)
    .onSnapshot(
      (querySnapshot) => {
        querySnapshot.forEach((doc) =>
          response.push({ ...doc.data(), [documentIdAs]: doc.id }),
        );
      },
      (error) => (response = error),
    );
  //
  unsubscribe();
  return response;
}

// CREATE DOC
export async function create(collection, documentId, data) {
  try {
    let response = await setDoc(doc(db, collection, documentId), data);
    return response;
  } catch (error) {
    return error;
  }
}

// ADD DOC
export async function add(collection, data, hasCreatedAt = true) {
  return db
    .collection(collection)
    .add(hasCreatedAt ? { ...data, createdAt: serverTimestamp() } : data)
    .then((docRef) => docRef.id)
    .catch((error) => error);
}

// UPDATE DOC
export async function update(
  collection,
  documentId,
  data,
  hasUpdatedAt = true,
) {
  return getDocRef(collection, documentId)
    .update(hasUpdatedAt ? { ...data, updatedAt: serverTimestamp() } : data)
    .then(() => true)
    .catch((error) => error);
}

// UPSERT - ADD OR UPDATE DOC
export async function save(collection, documentId, data, hasTimestamp = true) {
  return getDocRef(collection, documentId)
    .set(
      hasTimestamp
        ? {
            ...data,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          }
        : data,
      {
        merge: true,
      },
    )
    .then(() => true)
    .catch((error) => error);
}

// DELETE OR SOFT-DELETE DOC
export async function remove(collection, documentId, softDelete = true) {
  const docRef = getDocRef(collection, documentId);
  return softDelete
    ? docRef
        .update({ deletedAt: serverTimestamp() })
        .then(() => true)
        .catch((error) => error)
    : docRef
        .delete()
        .then(() => true)
        .catch((error) => error);
}
