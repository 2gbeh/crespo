import { db } from "../config";
import { collection, doc, setDoc, addDoc, updateDoc } from "firebase/firestore";
import { getTimestamps, getTimestamp } from "./firestore.service";

// CREATE OR SEED
export async function create(table, data, uuid) {
  try {
    let seed = Array.isArray(data);
    seed
      ? await Promise.all(
          data.map((e, i) => setDoc(doc(db, table, e?.[uuid] || i), e))
        )
      : await setDoc(doc(db, table, uuid), data);
    //
    return seed ? true : uuid;
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
    let res = await updateDoc(
      doc(db, table, uuid),
      addTimestamp ? { ...data, ...getTimestamp(1) } : data
    );
    return res;
  } catch (error) {
    return error;
  }
}

// ADD OR UPDATE (UPSERT)
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
      }
    )
    .then(() => true)
    .catch((error) => error);
}

// DELETE OR SOFT-DELETE
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
