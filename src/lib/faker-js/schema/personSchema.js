import { FakerHelper } from "../index";

export default {
  id: 1,
  avatar: "avatar",
  category: () => FakerHelper.number(1, 3),
  title: () => FakerHelper.number(1, 6),
  surname: "surname",
  other_names: "otherNames",
  sex: () => FakerHelper.number(1, 2),
  dob: "dateShort",
  marital_status: () => FakerHelper.number(1, 5),
  anniversary: "dateShort",
  phone: "phoneNG",
  mobile: "phoneNG",
  email: "email",
  address: "address",
  occupation: "occupation",
  house: "number",
  department: "number",
  joined: "date",
  created_at: "date",
};
