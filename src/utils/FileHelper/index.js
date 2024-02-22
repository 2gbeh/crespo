//
import { has } from "utils";
import {
  imageFormats,
  audioFormats,
  videoFormats,
  docxFormats,
} from "./constants";

export default class FileHelper {
  //
  static src = (x = "", defaultValue) =>
    x
      ? typeof x === "string"
        ? x
        : URL.createObjectURL(x)
      : defaultValue ?? null;
  //
  static url = (x) =>
    x ? (typeof x === "string" ? x : URL.createObjectURL(x)) : null;
  //
  static has = (x = "", k) =>
    typeof x === "string" ? has(x, k) : has(x?.name, k);
  //
  static size(obj, unit = "kb") {
    let [b, d] = [obj?.size, 1024];
    switch (unit) {
      case "mb":
        return b / (d * d);
      default:
        return b / d;
    }
  }
  //
  static sizeCheck = (x, greaterThan, unit = "mb") =>
    x
      ? typeof x === "numeric"
        ? parseFloat(x) > parseFloat(greaterThan)
        : this.size(x, unit) > parseFloat(greaterThan)
      : false;
  //
  static mimeType = (obj, is) => (is ? is === obj?.type : obj?.type);
  //
  static isFile = (x) => x && typeof x === "string" && x.indexOf(".") > -1;
  //
  static isImage = (x = "") =>
    imageFormats.find((ext) =>
      typeof x === "string" ? has(x, ext) : has(x?.name, ext)
    );
  //
  static isAudio = (x = "") =>
    audioFormats.find((ext) =>
      typeof x === "string" ? has(x, ext) : has(x?.name, ext)
    );
  //
  static isVideo = (x = "") =>
    videoFormats.find((ext) =>
      typeof x === "string" ? has(x, ext) : has(x?.name, ext)
    );
  //
  static isDocx = (x = "") =>
    docxFormats.find((ext) =>
      typeof x === "string" ? has(x, ext) : has(x?.name, ext)
    );
  //
  static presetType = (x, presets = ["IMG", "AUD", "VID", "DOC"]) =>
    x
      ? this.isImage(x)
        ? presets[0]
        : this.isAudio(x)
        ? presets[1]
        : this.isVideo(x)
        ? presets[2]
        : presets[3]
      : "";
  //
  static newName(x, withPrefix = true) {
    const [ts, ext] = [
      Date.now(),
      (str) => (str.indexOf(".") > -1 ? str.split(".").pop() : "png"),
    ];
    return x
      ? typeof x === "string"
        ? withPrefix
          ? `${this.presetType(x)}_${ts}.${ext(x)}`
          : `${ts}.${ext(x)}`
        : withPrefix
        ? `${this.presetType(x?.name)}_${ts}.${ext(x?.name)}`
        : `${ts}.${ext(x?.name)}`
      : `${ts}.png`;
  }
}