import { db } from "..";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  firestorePipe,
  getTimestamps,
  getTimestamp,
} from "./firestore.service";

// CREATE OR SEED
// ('users', mockUser, 1) | ('users', mockUsers, 'id')
export async function create(table, data, uuid_asPK) {
  try {
    let seed = Array.isArray(data);
    seed
      ? await Promise.all(
          data.map((e, i) => setDoc(doc(db, table, e?.[uuid_asPK] || i), e)),
        )
      : await setDoc(doc(db, table, uuid_asPK), data);
    //
    return firestorePipe(seed ? true : uuid_asPK);
  } catch (error) {
    return firestorePipe(error);
  }
}

// INSERT
export async function add(table, data, addTimestamp = true) {
  try {
    const docRef = await addDoc(
      collection(db, table),
      addTimestamp ? { ...data, ...getTimestamps() } : data,
    );
    return firestorePipe(docRef.id);
  } catch (error) {
    return firestorePipe(error);
  }
}

// UPDATE
export async function update(table, data, uuid, addTimestamp = true) {
  try {
    await updateDoc(
      doc(db, table, uuid),
      addTimestamp ? { ...data, ...getTimestamp(1) } : data,
    );
    return firestorePipe(uuid);
  } catch (error) {
    return firestorePipe(error);
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
      { merge: true },
    );
    return firestorePipe(uuid);
  } catch (error) {
    return firestorePipe(error);
  }
}

// DELETE OR SOFT-DELETE
export async function remove(table, uuid, softDelete = true) {
  try {
    softDelete
      ? await updateDoc(doc(db, table, uuid), getTimestamp(2))
      : await deleteDoc(doc(db, table, uuid));
    //
    return firestorePipe(uuid);
  } catch (error) {
    return firestorePipe(error);
  }
}
