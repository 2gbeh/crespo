// import Rx from "@/components/Repeat";
import React from "react";

type TRepeat = { as: React.ReactNode; n?: number };

const Repeat = ({ as, n = 2 }: TRepeat) => {
  return [...Array(n)].map((_, i) => (
    <React.Fragment key={i}>{as}</React.Fragment>
  ));
};

export default React.memo(Repeat);
