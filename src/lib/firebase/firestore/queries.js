import { db } from "..";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  onSnapshot,
  getCountFromServer,
  getAggregateFromServer,
  sum,
  average,
} from "firebase/firestore";
import { firestorePipe } from "./firestore.service";

// COUNT
// Ex. whereClause => ["sex", "==", 1]
export async function getCount(table, whereClause) {
  const docRef = collection(db, table);
  try {
    const snapshot = whereClause
      ? await getCountFromServer(query(docRef, where(...whereClause)))
      : await getCountFromServer(docRef);
    return firestorePipe(snapshot.data().count);
  } catch (error) {
    return firestorePipe(error);
  }
}

// SUM
// NOTE: `column` MUST be same as `whereClause[Field]`
export async function getSum(table, column, whereClause) {
  const docRef = collection(db, table);
  const sumFunc = { computed: sum(column) };
  try {
    const snapshot = whereClause
      ? await getAggregateFromServer(
          query(docRef, where(...whereClause)),
          sumFunc,
        )
      : await getAggregateFromServer(docRef, sumFunc);
    return firestorePipe(snapshot.data().computed);
  } catch (error) {
    return firestorePipe(error);
  }
}

// AVERAGE
// NOTE: `column` MUST be same as `whereClause[Field]`
export async function getAverage(table, column, whereClause) {
  const docRef = collection(db, table);
  const sumFunc = { computed: average(column) };
  try {
    const snapshot = whereClause
      ? await getAggregateFromServer(
          query(docRef, where(...whereClause)),
          sumFunc,
        )
      : await getAggregateFromServer(docRef, sumFunc);
    return firestorePipe(snapshot.data().computed);
  } catch (error) {
    return firestorePipe(error);
  }
}

// ALL
export async function getAll(table, sortBy = "created_at", asPK = "uuid") {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, table), orderBy(sortBy)),
    );
    let data = [];
    querySnapshot.forEach((doc) =>
      data.push({ ...doc.data(), [asPK]: doc.id }),
    );
    return firestorePipe(data);
  } catch (error) {
    return firestorePipe(error);
  }
}

// BY ID
export async function getById(table, uuid) {
  try {
    const docSnap = await getDoc(doc(db, table, uuid));
    return firestorePipe(docSnap.exists() ? docSnap.data() : {});
  } catch (error) {
    return firestorePipe(error);
  }
}

// BY ID (REAL-TIME)
export async function getById_Rt(table, uuid) {
  const obj = { data: {}, error: null };
  const unsubscribe = onSnapshot(
    doc(db, table, uuid),
    (doc) => (obj.data = doc.data()),
    (error) => (obj.error = error),
  );
  //
  return firestorePipe(obj.error || { data: obj.data, meta: { unsubscribe } });
}

// GET, WHERE
export async function getSome(
  table,
  field,
  value,
  queryOperator = "==",
  asPK = "uuid",
) {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, table), where(field, queryOperator, value)),
    );
    let data = [];
    querySnapshot.forEach((doc) =>
      data.push({ ...doc.data(), [asPK]: doc.id }),
    );
    return firestorePipe(data);
  } catch (error) {
    return firestorePipe(error);
  }
}

// GET, WHERE (REAL-TIME)
export async function getSome_Rt(
  table,
  field,
  value,
  queryOperator = "==",
  asPK = "uuid",
) {
  const obj = { data: [], error: null };
  const unsubscribe = onSnapshot(
    query(collection(db, table), where(field, queryOperator, value)),
    (querySnapshot) => {
      querySnapshot.forEach((doc) =>
        obj.data.push({ ...doc.data(), [asPK]: doc.id }),
      );
    },
    (error) => (obj.error = error),
  );
  //
  return firestorePipe(obj.error || { data: obj.data, meta: { unsubscribe } });
}

// PAGINATED
export async function getPaginated(
  table,
  offset = 0,
  perPage = 10,
  sortBy = "created_at",
  asPK = "uuid",
) {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, table),
        orderBy(sortBy),
        startAfter(offset),
        limit(perPage),
      ),
    );
    //
    let data = [];
    querySnapshot.forEach((doc) =>
      data.push({ ...doc.data(), [asPK]: doc.id }),
    );
    return firestorePipe({
      data,
      meta: { offset: querySnapshot.docs[querySnapshot.docs.length - 1] },
    });
  } catch (error) {
    return firestorePipe(error);
  }
}

// TOP
export async function getRecent(
  table,
  top = 10,
  sortBy = "created_at",
  asPK = "uuid",
) {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, table), orderBy(sortBy, "desc"), limit(top)),
    );
    let data = [];
    querySnapshot.forEach((doc) =>
      data.push({ ...doc.data(), [asPK]: doc.id }),
    );
    return firestorePipe(data);
  } catch (error) {
    return firestorePipe(error);
  }
}
