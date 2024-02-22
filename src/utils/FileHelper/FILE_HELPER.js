//
export const mockApiError = {
  message: "The media link must not be greater than 255 characters.",
  errors: {
    media_link: ["The media link must not be greater than 255 characters."],
  },
};

// https://firebasestorage.googleapis.com/v0/b/hardy-crossbar-307617.appspot.com/o?name=development%2Finfluencer%2Fcampaign%2Fcontent%2FVID_1689875524827.mp4
export const mockApiPostFirebase = {
  name: "development/influencer/campaign/content/VID_1689875524827.mp4",
  bucket: "hardy-crossbar-307617.appspot.com",
  generation: "1689875529699395",
  metageneration: "1",
  contentType: "video/mp4",
  timeCreated: "2023-07-20T17:52:09.733Z",
  updated: "2023-07-20T17:52:09.733Z",
  storageClass: "STANDARD",
  size: "1015716",
  md5Hash: "130Fq92+gXISzWd96rthSA==",
  contentEncoding: "identity",
  contentDisposition: "inline; filename*=utf-8''VID_1689875524827.mp4",
  crc32c: "UDfnNQ==",
  etag: "CMOgpvXsnYADEAE=",
  downloadTokens: "24f9a850-b9be-49ee-b2b2-638d5a83c431",
};

// https://firebasestorage.googleapis.com/v0/b/hardy-crossbar-307617.appspot.com/o/development%2Finfluencer%2Fcampaign%2Fcontent%2FVID_1689875524827.mp4
export const mockApiGetFirebase = {
  name: "development/influencer/campaign/content/VID_1689875524827.mp4",
  bucket: "hardy-crossbar-307617.appspot.com",
  generation: "1689875529699395",
  metageneration: "1",
  contentType: "video/mp4",
  timeCreated: "2023-07-20T17:52:09.733Z",
  updated: "2023-07-20T17:52:09.733Z",
  storageClass: "STANDARD",
  size: "1015716",
  md5Hash: "130Fq92+gXISzWd96rthSA==",
  contentEncoding: "identity",
  contentDisposition: "inline; filename*=utf-8''VID_1689875524827.mp4",
  crc32c: "UDfnNQ==",
  etag: "CMOgpvXsnYADEAE=",
  downloadTokens: "24f9a850-b9be-49ee-b2b2-638d5a83c431",
};

export const mockFirebaseFileUrl =
  "https://firebasestorage.googleapis.com/v0/b/hardy-crossbar-307617.appspot.com/o/development%2Finfluencer%2Fcampaign%2Fcontent%2FVID_1689875524827.mp4?alt=media&token=24f9a850-b9be-49ee-b2b2-638d5a83c431";

export const imageFormats = [
  ".apng",
  ".avif",
  ".bmp",
  ".cur",
  ".tiff",
  ".gif",
  ".ico",
  ".jfif",
  ".jpg",
  ".jpeg",
  ".pjp",
  ".pjpeg",
  ".png",
  ".svg",
  ".tif",
  ".webp",
];

export const audioFormats = [".mp3", ".ogg", ".wav"];

export const videoFormats = [
  ".3gp",
  ".avchd",
  ".avi",
  ".flv",
  ".m4p",
  ".m4v",
  ".mkv",
  ".mov",
  ".mp2",
  ".mp4",
  ".mpe",
  ".mpeg",
  ".mpg",
  ".mpv",
  ".ogg",
  ".qt",
  ".swf",
  ".webm",
  ".wmv",
];

export const docxFormats = [
  ".csv",
  ".doc",
  ".docx",
  ".pdf",
  ".ppt",
  ".pptx",
  ".txt",
  ".xls",
  ".xlsx",
];

export const mockImageObject = {
  jpg: {
    lastModified: 1689584918816,
    lastModifiedDate:
      "Mon Jul 17 2023 10:08:38 GMT+0100 (West Africa Standard Time)",
    name: "example.jpg",
    size: 3537,
    type: "image/jpeg",
    webkitRelativePath: "",
  },
  png: {
    lastModified: 1689847492279,
    lastModifiedDate:
      "Thu Jul 20 2023 11:04:52 GMT+0100 (West Africa Standard Time)",
    name: "example.png",
    size: 69467,
    type: "image/png",
    webkitRelativePath: "",
  },
  svg: {
    lastModified: 1679606278194,
    lastModifiedDate:
      "Thu Mar 23 2023 22:17:58 GMT+0100 (West Africa Standard Time)",
    name: "example.svg",
    size: 1644,
    type: "image/svg+xml",
    webkitRelativePath: "",
  },
  gif: {
    lastModified: 1683812018526,
    lastModifiedDate:
      "Thu May 11 2023 14:33:38 GMT+0100 (West Africa Standard Time)",
    name: "example.gif",
    size: 4784019,
    type: "image/gif",
    webkitRelativePath: "",
  },
};

export const mockVideoObject = {
  mp4: {
    lastModified: 1689743318000,
    lastModifiedDate:
      "Wed Jul 19 2023 06:08:38 GMT+0100 (West Africa Standard Time)",
    name: "example.mp4",
    size: 8009742,
    type: "video/mp4",
    webkitRelativePath: "",
  },
};