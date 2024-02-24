import { app } from "../config";
import { uploadBytes, ref, getStorage, getDownloadURL } from "firebase/storage";
import { getUploadPath } from "./storage.service";

export async function upload(fileObject, storagePath = "") {
  return uploadBytes(
    ref(getStorage(app), getUploadPath(fileObject, storagePath)),
    fileObject
  ).then((snapshot) => getDownloadURL(snapshot.ref).then((url) => url));
}

export async function remove(filePath) {}
