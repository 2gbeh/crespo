import { db } from "../config";
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

// COUNT
// Ex. whereClause => ["sex", "==", 1]
export async function getCount(table, whereClause) {
  const docRef = collection(db, table);
  try {
    const snapshot = whereClause
      ? await getCountFromServer(query(docRef, where(...whereClause)))
      : await getCountFromServer(docRef);
    return snapshot.data().count;
  } catch (error) {
    return error;
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
    return snapshot.data().computed;
  } catch (error) {
    return error;
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
    return snapshot.data().computed;
  } catch (error) {
    return error;
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
    return data;
  } catch (error) {
    return error;
  }
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
    return data;
  } catch (error) {
    return error;
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
  const response = { data: [], error: "" };
  const unsubscribe = onSnapshot(
    query(collection(db, table), where(field, queryOperator, value)),
    (querySnapshot) => {
      querySnapshot.forEach((doc) =>
        response.data.push({ ...doc.data(), [asPK]: doc.id }),
      );
    },
    (error) => (response.error = error),
  );
  //
  return { ...response, unsubscribe };
}

// BY ID
export async function getById(table, uuid) {
  try {
    const docSnap = await getDoc(doc(db, table, uuid));
    return docSnap.exists() && docSnap.data();
  } catch (error) {
    return error;
  }
}

// BY ID (REAL-TIME)
export async function getById_Rt(table, uuid) {
  const response = { data: {}, error: "" };
  const unsubscribe = onSnapshot(
    doc(db, table, uuid),
    (doc) => (response.data = doc.data()),
    (error) => (response.error = error),
  );
  //
  return { ...response, unsubscribe };
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
    return {
      data,
      meta: { offset: querySnapshot.docs[querySnapshot.docs.length - 1] },
    };
  } catch (error) {
    return error;
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
    return data;
  } catch (error) {
    return error;
  }
}
