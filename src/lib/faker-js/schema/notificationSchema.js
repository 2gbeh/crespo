import { FakerHelper } from "../index";

export default {
  id: 1,
  title: "product",
  summary: "description",
  status: () =>
    FakerHelper.in(
      Object.keys(["Unread", "Read"])
    ),
  created_at: "date",
};
