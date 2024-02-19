import React from "react";
import { clsx } from "clsx";
import AvatarPhoto from "./Avatar/Photo";
import Verified from "./Verified";

type TBavatar = {
  src?: string | null;
  size?: number;
  outline?: boolean;
  center?: boolean;
  //
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  alt?: boolean;
};

const Bavatar = ({
  src,
  size,
  outline = true,
  center,
  //
  top,
  bottom,
  left,
  right,
  alt,
}: TBavatar) => {
  let avatarProps = { src, size, outline };
  let verifiedProps = { top, bottom, left, right, alt };
  //
  return (
    <div className={clsx("flex", center && "flex-col items-center")}>
      <div className="relative">
        <AvatarPhoto {...avatarProps} />
        <Verified {...verifiedProps} />
      </div>
    </div>
  );
};

export default React.memo(Bavatar);
