import React from "react";

type TBadge = {
  alt?: boolean;
  value?: number | string;
  size?: number | string;
  top?: number | undefined;
  right?: number | undefined;
  bottom?: number | undefined;
  left?: number | undefined;
};

const Badge = ({
  alt = false,
  value = 0,
  size = 20,
  top,
  right,
  bottom,
  left,
}: TBadge) => {
  const sized = typeof size === "number" ? size + "px" : size;
  return (
    <var
      style={{
        backgroundColor: "#e11",
        color: "white",
        border: alt ? "none" : "2px solid white",
        borderRadius: alt ? "10px" : "100%",
        padding: alt ? "2px 7px" : "inherit",
        minWidth: alt ? "auto" : sized,
        minHeight: alt ? "auto" : sized,
        maxWidth: alt ? "auto" : sized,
        maxHeight: alt ? "auto" : sized,
        fontSize: 10,
        fontStyle: "normal",
        letterSpacing: alt ? 1 : "inherit",
        position: "absolute",
        top,
        right,
        bottom,
        left,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {alt ? "New" : value}
    </var>
  );
};

export default React.memo(Badge);
