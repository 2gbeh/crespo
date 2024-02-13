import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FaChevronLeft as BackIcon } from "react-icons/fa";

//
const GoBack = ({ to }: { to?: string }) => {
  const navigate = useNavigate();
  //
  return (
    <button onClick={() => (to ? navigate(to) : navigate(-1))}>
      <BackIcon size="1em" />
    </button>
  );
};

export default React.memo(GoBack);
