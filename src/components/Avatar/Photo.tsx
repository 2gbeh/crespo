import React from "react";
import { Link } from "react-router-dom";

type TAvatarPhoto = {
  src?: string;
  size?: number;
  radius?: string;
  title?: string;
  fill?: boolean;
  outline?: boolean;
  clickable?: boolean;
};

const AvatarPhoto = ({
  src = `/images/avatar-flat.png`,
  size = 32,
  radius = "100%",
  title = "",
  fill = true,
  outline = true,
  clickable = false,
}: TAvatarPhoto) => {
  const avatarPhoto = (
    <figure
      className="rounded-full overflow-hidden m-0 p-0"
      style={{
        minWidth: size,
        minHeight: size,
        maxWidth: size,
        maxHeight: size,
        borderRadius: radius,
        border: outline ? "1px solid #eee" : "",
      }}
    >
      <img
        src={src}
        alt={title}
        title={title}
        className={fill ? `object-cover` : `object-contain`}
        style={{
          width: size,
          height: size,
        }}
      />
    </figure>
  );
  //
  return clickable ? (
    <Link to={src || "#"} target="_new">
      {avatarPhoto}
    </Link>
  ) : (
    avatarPhoto
  );
};

export default React.memo(AvatarPhoto);
