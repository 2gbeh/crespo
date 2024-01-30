"use strict";
import { faker } from "@faker-js/faker";
import FakerCommon from "./Common";

export default class FakerDate extends FakerCommon {
  // 1992-09-15T01:00:00.000Z
  get date() {
    return faker.date
      .between({
        from: "1970-01-01T00:00:00.000Z",
        to: new Date().toISOString(),
      })
      .toISOString();
  }
  // 1992-09-15
  get dateShort() {
    let d = faker.date
      .between({
        from: "1970-01-01T00:00:00.000Z",
        to: new Date().toISOString(),
      })
      .toISOString();
    return d.slice(0, 10);
  }
  // 00:00:00 - 23:59:00
  get time() {
    let d = faker.date
      .between({
        from: "1970-01-01T00:00:00.000Z",
        to: new Date().toISOString(),
      })
      .toISOString();
    let arr = d.split("T");
    return arr[1].slice(0, 8);
  }
  // 00:00 - 23:59
  get timeShort() {
    let d = faker.date
      .between({
        from: "1970-01-01T00:00:00.000Z",
        to: new Date().toISOString(),
      })
      .toISOString();
    let arr = d.split("T");
    return arr[1].slice(0, 5);
  }
  // ////////////////////////////////////////////////////////////

  // Tuesday
  get day() {
    return faker.date.weekday({ context: true });
  }
  // Tue
  get dayShort() {
    return faker.date.weekday({ abbreviated: true, context: true });
  }
  // September
  get month() {
    return faker.date.month({ context: true });
  }
  // Sep
  get monthShort() {
    return faker.date.month({ abbreviated: true, context: true });
  }
  // 1970
  get year() {
    let d = faker.date
      .between({
        from: "1970-01-01T00:00:00.000Z",
        to: new Date().toISOString(),
      })
      .toISOString();
    return d.slice(0, 4);
  }
  // 92
  get yearShort() {
    let d = faker.date
      .between({
        from: "1970-01-01T00:00:00.000Z",
        to: new Date().toISOString(),
      })
      .toISOString();
    return d.slice(2, 4);
  }
}
