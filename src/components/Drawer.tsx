import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack as BackIcon } from "react-icons/io5";
//
const Drawer = ({ to }: { to?: string }) => {
  const navigate = useNavigate();
  //
  return <aside>Drawer</aside>;
};

export default React.memo(Drawer);
