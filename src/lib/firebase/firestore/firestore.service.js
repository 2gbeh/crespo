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

export const getTimestamp = (as = 0) => ({
  [as == 1
    ? TIMESTAMPS.updated_at
    : as == 2
      ? TIMESTAMPS.deleted_at
      : TIMESTAMPS.created_at]: serverTimestamp(),
});

export function getTimestamps(as = 0) {
  let [obj, now] = [
    {
      created_at: null,
      updated_at: null,
      deleted_at: null,
    },
    serverTimestamp(),
    // Timestamp.fromDate(new Date()),
  ];
  //
  switch (as) {
    case 1:
      obj.updated_at = now;
      break;
    case 2:
      obj.deleted_at = now;
      break;
    default:
      obj.created_at = now;
  }
  //
  return obj;
}

export class City {
  constructor(name, state, country) {
    this.name = name;
    this.state = state;
    this.country = country;
  }
  toString() {
    return this.name + ", " + this.state + ", " + this.country;
  }
}

// Firestore data converter
export const cityConverter = {
  toFirestore: (city) => {
    return {
      name: city.name,
      state: city.state,
      country: city.country,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new City(data.name, data.state, data.country);
  },
};
