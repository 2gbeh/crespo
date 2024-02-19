import { ETitle } from "@/constants/enums/Person";
import { EDepartment } from "@/constants/enums/App";
import EnumHelper from "@/utils/helpers/EnumHelper";

// type TMember = Record<string, null | boolean | number | string>;
type TMember = {
  id?: string | null;
  avatar?: string | null;
  category?: number | null;
  title?: number | null;
  surname?: string | null;
  other_names?: string | null;
  sex?: number | null;
  dob?: string | null;
  marital_status?: number | null;
  anniversary?: string | null;
  phone?: string | null;
  mobile?: string | null;
  email?: string | null;
  address?: string | null;
  occupation?: string | null;
  house?: number | null;
  department?: number | null;
  joined?: string | null;
  created_at?: string | null;
};

export default class MemberPipe {
  static intials = (e: TMember) =>
    (e.surname as string)[0] + (e.other_names as string).split(" ")[0][0];

  static title = (e: TMember) => {
    let t = e.title as number;
    return t < 3 && ` (${EnumHelper.asArray(ETitle)[t]}.)`;
  };

  static fullName = (e: TMember, withTitle: boolean = false) =>
    e.surname + ", " + e.other_names;

  static tel = (e: TMember) => (e.mobile ? e.phone + ", " + e.mobile : e.phone);

  static house = (e: TMember) =>
    EnumHelper.asArray(EDepartment)[e.house as number];
}
