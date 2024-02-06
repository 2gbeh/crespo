// HOWTO
// import X from "@/components/SketchBox";
// <X as={[0, 35, "Next"]} />  - DARK MODE
// <X as={[1, 35, "Next"]} />  - LIGHT MODE

type TSource = number;
type TDimension = number | Array<string | number>;
type TSketchBox = {
  as?: readonly [TSource, TDimension, string];
  alt?: string;
};

const getSource = (n: TSource): string =>
  `/images/box-${["dark", "light"][n]}.png`;

const getDimension = (x: TDimension): Record<string, string | number> =>
  Array.isArray(x)
    ? {
        minWidth: x[0],
        maxWidth: x[0],
        minHeight: x[1],
        maxHeight: x[1],
      }
    : {
        minWidth: x,
        maxWidth: x,
        minHeight: x,
        maxHeight: x,
      };

const SketchBox = ({ as = [1, 32, "Icon"], alt = "X" }: TSketchBox) => {
  return (
    <img
      src={getSource(as[0])}
      style={getDimension(as[1])}
      title={as[2]}
      alt={alt}
    />
  );
};

export default SketchBox;
