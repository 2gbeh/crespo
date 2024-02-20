"use strict";
import { faker } from "@faker-js/faker";

export default class FakerCommon {
  // false | true
  get boolean() {
    return faker.datatype.boolean();
  }
  // 0 | 1
  get booleanInt() {
    return faker.number.int({
      min: 0,
      max: 1,
    });
  }
  // 0 | 9
  get number() {
    return parseInt(faker.commerce.price({ min: 0, max: 9, dec: 0 }));
  }
  // a | z
  get letter() {
    return faker.string.fromCharacters(
      "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z".split(
        ", "
      )
    );
  }
  // ////////////////////////////////////////////////////////////

  // e175cac316a79afdd0ad3afb
  get id() {
    return faker.database.mongodbObjectId();
  }
  // ptL0KpX_yRMI98JFr6B3n
  get nanoId() {
    return faker.string.nanoid();
  }
  // 2c6e3880fd94ddb7ef72d34e683cdc0c47bec6e6
  get gitId() {
    return faker.git.commitSha();
  }
  // 4136cd0b-d90b-4af7-b485-5d1ded8db252
  get uuid() {
    return faker.string.uuid();
  }
  // ////////////////////////////////////////////////////////////

  // red
  get color() {
    return faker.vehicle.color();
  }
  // #0d7f26
  get hexcode() {
    return faker.internet.color();
  }
  // ////////////////////////////////////////////////////////////

  // https://remarkable-hackwork.info
  get url() {
    return faker.internet.url({ appendSlash: false });
  }
  // slow-timer.info
  get domain() {
    return faker.internet.domainName();
  }
  // slow-timer.info | https://remarkable-hackwork.info
  get website() {
    return faker.datatype.boolean()
      ? faker.internet.domainName()
      : faker.internet.url({ appendSlash: false });
  }
  // ////////////////////////////////////////////////////////////

  // incidentally
  get word() {
    let w = faker.word.sample();
    return w.charAt(0).toUpperCase() + w.slice(1);
  }
  // vice buoyant through apropos poised total wary boohoo
  get sentence() {
    return faker.word.words({ count: { min: 5, max: 10 } });
  }
  // If we override the card, we can get to the HDD feed through the back-end HDD sensor!
  get message() {
    return faker.hacker.phrase();
  }
  // invoice transaction at Kilback - Durgan using card ending with ***(...4316) for UAH 783.82 in account ***16168663
  get narration() {
    return faker.finance.transactionDescription();
  }
  // Quia hic sunt ducimus expedita quo impedit soluta. Quam impedit et ipsum optio. Unde dolores nulla nobis vero et aspernatur officiis.
  get paragraphs() {
    return faker.lorem.paragraphs({ min: 3, max: 5 });
  }
}
