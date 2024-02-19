"use strict";

import StringHelper from "./StringHelper";

// exists and has
export const has = (data, key) => data && key in data;

// converts or compares
export const cc = (x, y = null) =>
  y
    ? x.toString().toLowerCase() === y.toString().toLowerCase()
    : x.toString().toLowerCase();

// TODO: isArr, isObj, isCollection, hasData
export default class ArrayHelper {
  static ids = (arr) => (arr ? arr.map((obj) => obj.id) : []);

  //
  static column(arr, key = "id") {
    return arr ? arr.map((obj) => key in obj && obj[key]) : [];
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  static count = (arr, key, value = null) =>
    value
      ? arr.reduce(
          (T, obj) => (key in obj && cc(obj[key], value) ? T + 1 : T + 0),
          0
        )
      : arr.reduce((T, obj) => (key in obj ? T + 1 : T + 0), 0);

  static sum = (arr, key, value = null) =>
    value
      ? arr.reduce(
          (T, obj) =>
            key in obj && cc(obj[key], value)
              ? T + parseFloat(obj[key])
              : T + 0,
          0
        )
      : arr.reduce(
          (T, obj) => (key in obj ? T + parseFloat(obj[key]) : T + 0),
          0
        );

  static rate = (arr, key, value, dp = 2) =>
    ((this.count(arr, key, value) * 100) / this.count(arr, key)).toFixed(dp);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  static find = (arr, keyOrId, value = null) =>
    typeof keyOrId === "number"
      ? arr.find((obj) => "id" in obj && cc(obj["id"], keyOrId))
      : arr.find((obj) => (value ? cc(obj[keyOrId], value) : keyOrId in obj));

  static top = (arr, len = 10, desc = false) =>
    desc ? arr.slice(-len) : arr.slice(0, len);

  static includes = (arr, key, value) =>
    arr.filter((obj) => obj[key].search(new RegExp(value, "i")) > -1);

  static excludes = (arr, key, value) =>
    arr.filter((obj) => obj[key].search(new RegExp(value, "i")) < 0);

  // key, value, values
  static search = (arr, key, valueOrValues = null) =>
    typeof Array.isArray(valueOrValues)
      ? arr.filter((obj) => valueOrValues.includes(obj[key]))
      : arr.filter((obj) =>
          valueOrValues ? cc(obj[key], valueOrValues) : key in obj
        );

  // https://www.w3schools.com/jsref/jsref_splice.asp
  static splice(arr, keyOrId, value = null) {
    if (typeof keyOrId === "number") {
      value = keyOrId;
      keyOrId = "id";
    }
    let i = arr.findIndex((obj) => keyOrId in obj && cc(obj[keyOrId], value));
    return i >= 0 ? arr.splice(i, 1) : arr;
  }

  // https://www.scaler.com/topics/javascript-sort-an-array-of-objects/
  static sort = (arr, key, desc = false) =>
    desc
      ? arr.sort((objX, objY) =>
          objX[key] < objY[key] ? 1 : objX[key] > objY[key] ? -1 : 0
        )
      : arr.sort((objX, objY) =>
          objX[key] > objY[key] ? 1 : objX[key] < objY[key] ? -1 : 0
        );

  static sortFloat = (arr, key, desc = false) =>
    desc
      ? arr.sort((objX, objY) =>
          parseFloat(objX[key]) < parseFloat(objY[key])
            ? 1
            : parseFloat(objX[key]) > parseFloat(objY[key])
            ? -1
            : 0
        )
      : arr.sort((objX, objY) =>
          parseFloat(objX[key]) > parseFloat(objY[key])
            ? 1
            : parseFloat(objX[key]) < parseFloat(objY[key])
            ? -1
            : 0
        );

  // https://dev.to/codebubb/how-to-shuffle-an-arr-in-javascript-2ikj
  static shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  static random = (arr, indexOnly = false) =>
    indexOnly
      ? Math.floor(Math.random() * arr.length)
      : arr[Math.floor(Math.random() * arr.length)];

  static divide(arr, len = 25) {
    // Ex. [[0-24],[25-49],[50-74],[75-99]]
    let [k, n, tmp, res] = [0, arr.length, [], []];
    if (n > len) {
      for (let i = 0; i < n / len; i++) {
        for (let j = 0; j < len; j++) {
          // console.log(i, j, k);
          if (k < n) {
            tmp.push(arr[k]);
            k += 1;
          } else break;
        }
        res.push(tmp);
        tmp = [];
      }
      return res;
    }
    return arr;
  }

  static toggle(arr, objOrId, objKey = "id") {
    let i = -1;
    if (typeof objOrId === "object") {
      i =
        objKey in objOrId
          ? arr.findIndex((obj) => cc(obj[objKey], objOrId[objKey]))
          : -1;
    } else {
      i = arr.findIndex((e) => cc(e, objOrId));
    }
    i < 0 ? arr.push(objOrId) : arr.splice(i, 1);
    // console.log("toggle", arr, objOrId, objKey);
    return arr;
  }

  static compareReplaceObject(objX, objY, isNumeric = true) {
    Object.keys(objX).map((key) => {
      if (typeof objY === "object" && key in objY)
        objX[key] = isNumeric ? StringHelper.money(objY[key]) : objY[key];
    });

    return objX;
  }

  static compareUpdateArray(
    arrI,
    arrJ,
    keys = ["id", "connection_id"],
    as = "connection"
  ) {
    let [arr, k] = [[], null];
    if (Array.isArray(arrI) && arrI.length > 0) {
      arr = arrI;
      if (Array.isArray(arrJ) && arrJ.length > 0) {
        arr.forEach((i) => {
          arrJ.map((j) => {
            if (i[keys[0]] === j[keys[1]]) k = j;
          });
          if (k) j[as] = k;
          k = null;
        });
      }
    }

    return arr;
  }

    //
  static findUpdateObject = (obj, key, def = null) =>
    obj && key in obj ? obj[key] : def || obj[key];
}
