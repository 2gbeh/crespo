import React from "react";
import { MdStars, MdLocalFireDepartment } from "react-icons/md";
import Border from "./_styled/Border.module";
//
import COLOR from "@/constants/COLOR";

type TVerified = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  alt?: boolean;
};

const Verified = ({ top, bottom, left, right, alt }: TVerified) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "100%",
        position: "absolute",
        top,
        bottom,
        left,
        right,
      }}
      title={alt ? "Pastor" : "Worker"}
    >
      {alt ? (
        <Border $color={COLOR.brand} $size={24} className="border-2 border-white">
          <MdLocalFireDepartment color={'white'} size={"1em"} />
        </Border>
      ) : (
        <MdStars color={COLOR.brand} size={"1.5em"} />
      )}
    </div>
  );
};

export default React.memo(Verified);
