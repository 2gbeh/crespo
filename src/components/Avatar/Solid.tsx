import React from "react";
import { getColor, getInitials } from "./Avatar.service";

type TAvatarSolid = {
  text?: string;
  color?: string;
  size?: number;
  title?: string;
};

const AvatarSolid = ({
  text = "NA",
  color,
  size = 32,
  title = "",
}: TAvatarSolid) => {
  return (
    <div
      className="rounded-full flex items-center justify-center text-white text-xs tracking-wide"
      title={title}
      style={{
        backgroundColor: color || getColor(text),
        minWidth: size,
        minHeight: size,
        maxWidth: size,
        maxHeight: size,
      }}
    >
      {getInitials(text).toUpperCase()}
    </div>
  );
};

export default React.memo(AvatarSolid);
