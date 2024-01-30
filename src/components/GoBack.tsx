import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack as BackIcon } from "react-icons/io5";
//
const GoBack = ({ to }: { to?: string }) => {
  const navigate = useNavigate();
  //
  return (
    <button
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className="absolute top-4 left-4 flex items-center gap-1"
    >
      <BackIcon className="text-[22px]" />
      Back
    </button>
  );
};

export default React.memo(GoBack);
