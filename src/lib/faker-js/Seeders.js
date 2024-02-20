"use strict";
import FakerPost from "./model/Post";
import userSchema from "./schema/userSchema";
import personSchema from "./schema/personSchema";
import postSchema from "./schema/postSchema";
import notificationSchema from "./schema/notificationSchema";

export default class Seeders extends FakerPost {
  get getUser() {
    return this.factory({ ...userSchema, id: "id" }, 1).pop();
  }
  get getUsers() {
    return this.factory({ ...userSchema, id: "id" }, 25);
  }
  get getPerson() {
    return this.factory({ ...personSchema, id: "id" }, 1).pop();
  }
  get getPeople() {
    return this.factory({ ...personSchema, id: "id" }, 25);
  }
  get getPost() {
    return this.factory({ ...postSchema, id: "id" }, 1).pop();
  }
  get getPosts() {
    return this.factory({ ...postSchema, id: "id" }, 25);
  }
  get getNotification() {
    return this.factory({ ...notificationSchema, id: "id" }, 1).pop();
  }
  get getNotifications() {
    return this.factory({ ...notificationSchema, id: "id" }, 5);
  }
}
