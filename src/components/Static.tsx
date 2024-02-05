import React from "react";
import * as ASSETS from "@/constants/ASSETS";

type TSvgIcon = {
  src: string;
  size?: number;
  title?: string;
};

const Static = ({ src = "default", size = 32, title = "" }: TSvgIcon) => {
  const [w, h] = Array.isArray(size) ? [size[0], size[1]] : [size, size];
  return (
    <img
      src={(ASSETS as Record<string, string>)[src.replaceAll("-", "_")]}
      style={{
        minWidth: w,
        maxWidth: w,
        minHeight: h,
        maxHeight: h,
      }}
      title={title}
      alt={title}
    />
  );
};

export default React.memo(Static);
