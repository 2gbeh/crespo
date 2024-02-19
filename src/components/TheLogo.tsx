import React from "react";
import { Link } from "react-router-dom";
import AvatarPhoto from "@/components/Avatar/Photo";

type TTheLogo = {
  size?: number;
  to?: string;
  center?: boolean;
};

const TheLogo = ({ size = 80, to, center }: TTheLogo) => {
  const Avatar = <AvatarPhoto src="/icon.png" size={size} />;
  const Image = to ? (
    <Link to={to} title="Home">
      {Avatar}
    </Link>
  ) : (
    Avatar
  );
  //
  return center ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {Image}
    </div>
  ) : (
    Image
  );
};

export default React.memo(TheLogo);
