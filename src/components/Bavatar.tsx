import React from "react";
import { clsx } from "clsx";
import { AvatarPhoto } from "./Avatar";
import Verified from "./Verified";

type TBavatar = {
  src?: string | undefined;
  size?: number;
  outline?: boolean;
  //
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  center?: boolean;
};

const Bavatar = ({
  src,
  size,
  outline = true,
  //
  top,
  bottom,
  left,
  right,
  center,
}: TBavatar) => {
  let avatarProps = { src, size, outline };
  let verifiedProps = { top, bottom, left, right };
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
