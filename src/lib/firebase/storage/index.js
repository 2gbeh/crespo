import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import firebaseConfig from "../config";

export async function upload(fileObject, storagePath = "") {
  return uploadBytes(
    ref(getStorage(firebaseConfig), getUploadPath(fileObject, storagePath)),
    fileObject
  ).then((snapshot) => getDownloadURL(snapshot.ref).then((url) => url));
}

export async function remove(filePath) {}

const getUploadPath = (fileObject, storagePath) => {
  let [getFilePrefix, getFileExtension] = [
    (fileType) =>
      fileType.indexOf("/") > -1
        ? fileType.split("/").shift().toUpperCase()
        : "IMAGE",
    (fileName) =>
      fileName.indexOf(".") > -1 ? fileName.split(".").pop() : "png",
  ];

  return `
    ${storagePath}/${getFilePrefix(fileObject.type)}_${Date.now()}.${getFileExtension(
      fileObject.name
    )}
  `;
};