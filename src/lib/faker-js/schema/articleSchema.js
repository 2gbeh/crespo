import { FakerHelper } from "../main.js";

export const user = {
  avatar: "avatar",
  name: "otherNames",
  email: "email",
  password: "password",
  role: () => FakerHelper.in(["COMMENT", "POST"]),
};

export const post = {
  user_id: 1,
  thumbnail: "thumbnail",
  headline: "sentence",
  article: "paragraphs",
};

export const comment = {
  user_id: () => FakerHelper.number(1, 2),
  post_id: () => FakerHelper.number(1, 25),
  comment: "message",
};

export default comment;
