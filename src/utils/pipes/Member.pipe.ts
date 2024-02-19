import { ETitle } from "@/constants/enums/Person";
import { EDepartment } from "@/constants/enums/App";
import EnumHelper from "@/utils/helpers/EnumHelper";

type TMember = Record<string, null | boolean | number | string>;

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
