import React from "react";
import { Link } from "react-router-dom";

type TAvatarPhoto = {
  src: string;
  size: number;
  title?: string;
  clickable?: boolean;
};

const AvatarPhoto = ({
  src,
  size = 32,
  title = "",
  clickable = false,
}: TAvatarPhoto) => {
  const avatarPhoto = (
    <div
      className="rounded-full overflow-hidden border"
      style={{
        minWidth: size,
        minHeight: size,
        maxWidth: size,
        maxHeight: size,
      }}
    >
      <img src={src} alt="avatar" title={title} className="object-cover" />
    </div>
  );
  //
  return clickable ? (
    <Link to={src} target="_new">
      {avatarPhoto}
    </Link>
  ) : (
    avatarPhoto
  );
};

export default React.memo(AvatarPhoto);
