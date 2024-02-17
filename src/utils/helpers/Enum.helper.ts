export default class EnumHelper {
  static asOptions = (E: object): Record<string, string | number>[] =>
    Object.entries(E)
      .map(([option, value]) => ({
        value,
        option,
      }))
      .filter(({ option }) => isNaN(+option));
}
