"use strict";
import { faker } from "@faker-js/faker";
import { FakerHelper as Super } from "../main";
import FakerUser from "./User";

export default class FakerPost extends FakerUser {
  // https://ui-avatars.com/api/?name=john+doe&background=0093dd&color=fff
  get logo() {
    let [obj, q] = [
      {
        name: faker.string.alpha({ length: 2, casing: "upper" }),
        color: "fff",
        background: faker.internet.color().replace("#", ""),
      },
      "?",
    ];
    Object.entries(obj).map(([k, v]) => (q += `${k}=${v}&`));
    return `https://ui-avatars.com/api/${q}`;
  }
  // https://loremflickr.com/640/480?lock=1234
  get thumbnail() {
    return faker.image.url();
  }
  // ////////////////////////////////////////////////////////////

  // Incredible Soft Gloves
  get product() {
    return faker.commerce.productName();
  }
  // Incredible Soft Gloves
  get description() {
    return faker.commerce.productDescription();
  }
  // YV1MH682762184654
  get vin() {
    faker.vehicle.vin();
  }
  // 13-850175-913761-7
  get imel() {
    faker.phone.imei();
  }
  // ////////////////////////////////////////////////////////////

  // Zieme, Hauck and McClure
  get company() {
    return faker.company.name();
  }
  // Upgradable systematic flexibility
  get slogan() {
    return faker.company.catchPhrase();
  }
  // ////////////////////////////////////////////////////////////

  // 1970.00
  get price() {
    return faker.commerce.price({ min: 1, max: 999999, dec: 2 });
  }
  // 1,970.00
  get priceCsv() {
    let p = faker.commerce.price({ min: 1, max: 999999, dec: 2 });
    let arr = p.split(".");
    return `${Number(arr[0]).toLocaleString()}.${arr[1]}`;
  }
  //  ₦ 1,970.00
  get priceNG() {
    let p = faker.commerce.price({ min: 1, max: 999999, dec: 2 });
    let arr = p.split(".");
    return `₦ ${Number(arr[0]).toLocaleString()}.${arr[1]}`;
  }
  //  $1,970.00
  get priceUS() {
    let p = faker.commerce.price({ min: 1, max: 999999, dec: 2 });
    let arr = p.split(".");
    return `$${Number(arr[0]).toLocaleString()}.${arr[1]}`;
  }
  // 0.0 - 50.9
  get discount() {
    return Super.decimals(faker.commerce.price({ min: 0, max: 50, dec: 0 }), 1);
  }
  // 0.0 - 10.9
  get vat() {
    return Super.decimals(faker.commerce.price({ min: 0, max: 10, dec: 0 }), 1);
  }
  // ////////////////////////////////////////////////////////////

  // 0.0 - 5.9
  get ratings() {
    return Super.decimals(faker.commerce.price({ min: 0, max: 5, dec: 0 }), 1);
  }
  // 1.9k - 1.9m
  get reviews() {
    return parseInt(faker.commerce.price({ min: 999, max: 999999999, dec: 0 }));
  }
}
