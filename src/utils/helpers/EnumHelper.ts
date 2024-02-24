type TValue = string | number;

type TCollection = Record<string, string | number>[];

type TFormattedObject = {
  key: string;
  value: string | number;
  index: number;
  pointer: number;
};

export default class EnumHelper {
  static keyOf = (E: object, value: TValue) => {
    let obj = this.asObject(E).find(
      (e) => e.value.toString().search(new RegExp(value.toString(), "i")) > -1
    );
    return obj ? obj.key : null;
  };

  static valueOf = (E: object, key: string): TValue | null => {
    let obj = this.asObject(E).find(
      (e) => e.key.search(new RegExp(key, "i")) > -1
    );
    return obj ? obj.value : null;
  };

  static keyAt = (E: object, index: number) => this.asArray(E, true)[index];

  static valueAt = (E: object, index: number) => this.asArray(E)[index];

  static asArray = (E: object, keys = false): string[] =>
    keys
      ? Object.keys(E).filter((e) => isNaN(+e))
      : Object.values(E).filter((e) => isNaN(+e));

  static asObject = (E: object): TFormattedObject[] =>
    Object.entries(E)
      .map(([key, value], index) => ({
        key,
        value,
        index,
        pointer: index + 1,
      }))
      .filter(({ key }) => isNaN(+key));

  static asOptions = (E: object, keyAsOption = true): TCollection =>
    this.asObject(E).map((e) =>
      keyAsOption
        ? {
            value: e.value,
            option: e.key,
          }
        : {
            value: e.key,
            option: e.value,
          }
    );
}
