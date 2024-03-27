"use strict";
import FakerPost from "./model/Post";
import userSchema from "./schema/userSchema";
import personSchema from "./schema/personSchema";
import postSchema from "./schema/postSchema";
import notificationSchema from "./schema/notificationSchema";
import eventSchema from "./schema/eventSchema.js";
import articleSchema from "./schema/articleSchema.js";

export default class Seeders extends FakerPost {
  log = (args) => console.log(JSON.stringify(args));

  seed = (schema, size, strict = false) =>
    size > 1
      ? this.factory(strict ? schema : { ...schema, id: "id" }, size)
      : this.factory(strict ? schema : { ...schema, id: "id" }, 1).pop();

  factory(schema, size = 10, asObject = false) {
    let [arr, obj] = [[], {}];
    for (let i = 0; i < size; i++) {
      Object.entries(schema).map(([key, callback]) => {
        let value;
        switch (typeof callback) {
          case "string":
            value =
              callback.charAt(0) === "#" ? callback.slice(1) : this[callback];
            break;
          case "object":
            value = callback ? this.factory(callback, 1).pop() : null;
            break;
          case "function":
            value = callback();
            break;
          default:
            value = callback;
        }
        obj[key] = value;
      });
      arr.push(obj);
      obj = {};
    }
    return asObject ? arr.pop() : arr;
  }

  // ////////////////////////////////////////////////////////////////////
  get getUser() {
    return this.seed(userSchema, 1);
  }
  get getUsers() {
    return this.seed(userSchema, 25);
  }
  get getPerson() {
    return this.seed(personSchema, 1);
  }
  get getPeople() {
    return this.seed(personSchema, 25);
  }
  get getPost() {
    return this.seed(postSchema, 1);
  }
  get getPosts() {
    return this.seed(postSchema, 25);
  }
  get getNotification() {
    return this.seed(notificationSchema, 1);
  }
  get getNotifications() {
    return this.seed(notificationSchema, 5);
  }
  get getEvent() {
    return this.seed(eventSchema, 1);
  }
  get getEvents() {
    return this.seed(eventSchema, 10);
  }
  get getArticle() {
    return this.seed(eventSchema, 1, true);
  }
  get getArticles() {
    return this.seed(articleSchema, 25, true);
  }
}
