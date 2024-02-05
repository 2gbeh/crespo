export const styles = {
  figure: (width: number, height: number, radius: number) => ({
    style: {
      minWidth: width,
      maxWidth: width,
      minHeight: height,
      maxHeight: height,
      background: "white",
      border: "1px solid #eee",
      borderRadius: radius,
      margin: 0,
      padding: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
  }),

  img: (width: number, height: number, fill: boolean) => ({
    style: {
      width,
      height,
      objectFit: fill ? "cover" : "contain",
    },
  }),
};
