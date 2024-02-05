import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack as BackIcon } from "react-icons/io5";
//
const GoBack = ({ to }: { to?: string }) => {
  const navigate = useNavigate();
  //
  return (
    <button onClick={() => (to ? navigate(to) : navigate(-1))}>
      <BackIcon size="1.2em" />
    </button>
  );
};

export default React.memo(GoBack);
