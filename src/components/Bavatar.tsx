import React from "react";
import { AvatarPhoto } from "./Avatar";
import Verified from "./Verified";

type TBavatar = {
  src?: string;
  size?: number;
  outline?: boolean;
  //
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
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
}: TBavatar) => {
  let avatarProps = { src, size, outline };
  let verifiedProps = { top, bottom, left, right };
  //
  return (
    <div className="relative">
      <AvatarPhoto {...avatarProps} />
      <Verified {...verifiedProps} />
    </div>
  );
};

export default React.memo(Bavatar);
