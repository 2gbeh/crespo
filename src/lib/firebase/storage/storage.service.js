export const getUploadPath = (fileObject, storagePath) => {
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
