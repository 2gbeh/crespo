import { db } from "../config";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getTimestamps, getTimestamp } from "./firestore.service";

// CREATE OR SEED
// ('users', mockUser, 1) | ('users', mockUsers, 'id')
export async function create(table, data, uuid_Pk) {
  try {
    let seed = Array.isArray(data);
    seed
      ? await Promise.all(
          data.map((e, i) => setDoc(doc(db, table, e?.[uuid_Pk] || i), e))
        )
      : await setDoc(doc(db, table, uuid_Pk), data);
    //
    return seed ? true : uuid_Pk;
  } catch (error) {
    return error;
  }
}

// INSERT
export async function add(table, data, addTimestamp = true) {
  try {
    const docRef = await addDoc(
      collection(db, table),
      addTimestamp ? { ...data, ...getTimestamps() } : data
    );
    return docRef.id;
  } catch (error) {
    return error;
  }
}

// UPDATE
export async function update(table, data, uuid, addTimestamp = true) {
  try {
    await updateDoc(
      doc(db, table, uuid),
      addTimestamp ? { ...data, ...getTimestamp(1) } : data
    );
    return uuid;
  } catch (error) {
    return error;
  }
}

// ADD OR UPDATE (UPSERT)
export async function save(table, data, uuid, addTimestamp = true) {
  try {
    await setDoc(
      doc(db, table, uuid),
      addTimestamp
        ? {
            ...data,
            ...getTimestamps(10),
          }
        : data,
      { merge: true }
    );
    return uuid;
  } catch (error) {
    return error;
  }
}

// DELETE OR SOFT-DELETE
export async function remove(table, uuid, softDelete = true) {
  try {
    softDelete
      ? await updateDoc(doc(db, table, uuid), getTimestamp(2))
      : await deleteDoc(doc(db, table, uuid));
    //
    return uuid;
  } catch (error) {
    return error;
  }
}
