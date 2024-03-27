"use strict";
// Author: Tugbeh Emmmanuel <etugbeh@outlook.com>
// Date: 2023-06-24 17:40:00
// https://fakerjs.dev/api/faker.html#constructor

import { faker } from "@faker-js/faker";
import Seeders from "./Seeders";

// import fakerHelper from "lib/faker-js/main";
// fakerHelper.log(fakerHelper.getEvents);
export class FakerHelper extends Seeders {
  // 0 - 9
  static number = (min = 0, max = 9) =>
    parseInt(faker.commerce.price({ min, max, dec: 0 }));
  // 12
  static numbers = (length = 2, allowLeadingZeros = false) =>
    faker.string.numeric({ length, allowLeadingZeros });
  // .0 - .99
  static decimals = (num, dec = 2) =>
    parseFloat(num + "." + faker.commerce.price({ min: 0, max: 9, dec }));
  // AB
  static letters = (length = 2, casing = "upper") =>
    faker.string.alpha({ length, casing });
  // 1970.00
  static price = (min = 1, max = 999999, dec = 2) =>
    faker.commerce.price({ min, max, dec });
  // $Password1
  static password = (length = 8) =>
    faker.string.fromCharacters("!,@,#,$,%,^,&,*".split(",")) +
    faker.string.alpha(length) +
    faker.string.numeric();
  // https://picsum.photos/seed/NWbJM2B/640/480?grayscale&blur=4
  static image = (width = 160, height = 160, grayscale = false, blur = false) =>
    faker.image.urlPicsumPhotos({ width, height, grayscale, blur });
  // random element in array/csv
  static in = (arrOrCsv, delimiter = ",") =>
    faker.string.fromCharacters(
      typeof arrOrCsv === "string" ? arrOrCsv.split(delimiter) : arrOrCsv,
    );
  // random key/value in enum
  static inEnum = (arrOrObj, inKeys = true) =>
    faker.string.fromCharacters(
      inKeys ? Object.keys(arrOrObj) : Object.values(arrOrObj),
    );
}

export default new FakerHelper();
