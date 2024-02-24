import { db } from "../config";
import {
  query,
  where,
  getCountFromServer,
  getAggregateFromServer,
  sum,
} from "firebase/firestore";

// COUNT
export async function getCount(collection, whereClause) {
  let docRef = getDocRef(collection, null, true);
  //
  let snapshot;
  if (Array.isArray(whereClause) && whereClause.length === 3) {
    let [field, queryOperator, value] = whereClause;
    snapshot = await getCountFromServer(
      query(docRef, where(field, queryOperator, value))
    );
  } else snapshot = await getCountFromServer(docRef);
  //
  return snapshot.data()?.count || 0;
}

// SUM
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
      aggregateFn
    );
  } else snapshot = await getAggregateFromServer(docRef, aggregateFn);
  //
  return snapshot.data()?.value || 0;
}

// ALL
export async function getAll(collection, orderBy = "createdAt") {
  return getDocRef(collection, null, true)
    .orderBy(orderBy)
    .get()
    .then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) =>
        data.push({ ...doc.data(), [primaryKey]: doc.id })
      );
      return data;
    })
    .catch((error) => error);
}

// PAGINATED
export async function getPaginated(
  collection,
  orderBy = "createdAt",
  limit = 10,
  offset = 0
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
        data.push({ ...doc.data(), [primaryKey]: doc.id })
      );
      return { data, meta: { offset } };
    })
    .catch((error) => error);
}

// TOP
export async function getRecent(collection, orderBy = "createdAt", limit = 10) {
  return getDocRef(collection, null, true)
    .orderBy(orderBy, "desc")
    .limit(limit)
    .get()
    .then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) =>
        data.push({ ...doc.data(), [primaryKey]: doc.id })
      );
      return data;
    })
    .catch((error) => error);
}

// BY ID
export async function getById(collection, documentId) {
  return getDocRef(collection, documentId)
    .get()
    .then((doc) => doc.exists && doc.data())
    .catch((error) => error);
}

// BY ID (REAL-TIME)
export function getById_Rt(collection, documentId) {
  let response = {};
  let unsubscribe = getDocRef(collection, documentId).onSnapshot(
    (doc) => (response = doc.data()),
    (error) => (response = error)
  );
  //
  unsubscribe();
  return response;
}

// GET, WHERE
export async function getWhere(
  collection,
  field,
  value,
  queryOperator = "==",
  primaryKey = "uuid"
) {
  return getDocRef(collection, null, true)
    .where(field, queryOperator, value)
    .get()
    .then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) =>
        data.push({ ...doc.data(), [primaryKey]: doc.id })
      );
      return data;
    })
    .catch((error) => error);
}

// GET, WHERE (REAL-TIME)
export function getWhere_Rt(
  collection,
  field,
  value,
  queryOperator = "==",
  documentIdAs = "uuid"
) {
  let response = [];
  let unsubscribe = getDocRef(collection, null, true)
    .where(field, queryOperator, value)
    .onSnapshot(
      (querySnapshot) => {
        querySnapshot.forEach((doc) =>
          response.push({ ...doc.data(), [documentIdAs]: doc.id })
        );
      },
      (error) => (response = error)
    );
  //
  unsubscribe();
  return response;
}
