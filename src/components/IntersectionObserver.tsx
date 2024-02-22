import React from "react";
import { InView } from "react-intersection-observer";

type TIntersectionObserver = { handleChange: () => void };

const IntersectionObserver = ({ handleChange }: TIntersectionObserver) => {
  return (
    <InView
      as="div"
      onChange={(inView, entry) => inView && handleChange()}
    >&nbsp;</InView>
  );
};

export default React.memo(IntersectionObserver);
