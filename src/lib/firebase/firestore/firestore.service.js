import { Timestamp, serverTimestamp } from "firebase/firestore";

export const TIMESTAMPS = Object.freeze({
  created_at: "created_at",
  updated_at: "updated_at",
  deleted_at: "deleted_at",
});

export const ORDER_BY = Object.freeze({
  ascending: "asc",
  descending: "desc",
});

export const QUERY_OPERATOR = Object.freeze({
  equal_to: "==",
  not_equal_to: "!=",
  less_than: "<",
  less_than_or_equal_to: "<=",
  greater_than: ">",
  greater_than_or_equal_to: ">=",
  array_contains: "array-contains",
  array_contains_any: "array-contains-any",
  in: "in",
  not_in: "not-in",
});

export const firestorePipe = (response) => {
  if (response.toString().startsWith("FirebaseError")) {
    return {
      status: 400,
      statusText: "BAD_REQUEST",
      message: response,
    };
  } else {
    return {
      status: 200,
      statusText: "OK",
      data: response,
    };
  }
};

// 1970-01-20T18:40:14.521Z | { seconds: 1708889769, nanoseconds: 851000000 }
export const datePipe = (dateProp) =>
  dateProp?.seconds
    ? new Date(dateProp.seconds * 1000).toJSON()
    : dateProp.indexOf("-") >= 4
      ? Timestamp.fromDate(new Date(dateProp))
      : dateProp;

export const getTimestamp = (as = 0) => ({
  [as == 1
    ? TIMESTAMPS.updated_at
    : as == 2
      ? TIMESTAMPS.deleted_at
      : TIMESTAMPS.created_at]: serverTimestamp(),
});

export function getTimestamps(as = 0) {
  const [obj, now] = [
    {
      created_at: null,
      updated_at: null,
      deleted_at: null,
    },
    serverTimestamp(),
  ];
  //
  switch (as) {
    case 1:
      obj.updated_at = now;
      break;
    case 2:
      obj.deleted_at = now;
      break;
    case 10:
      obj.created_at = now;
      obj.updated_at = now;
      break;
    default:
      obj.created_at = now;
  }
  //
  return obj;
}
