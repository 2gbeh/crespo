import React from "react";
import { MdStars } from "react-icons/md";
//
import APP from "@/constants/APP";

type TVerified = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

const Verified = ({ top, bottom, left, right }: TVerified) => {
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
      title="Worker"
    >
      <MdStars color={APP.color.brand} size={"1.5em"} />
    </div>
  );
};

export default React.memo(Verified);
