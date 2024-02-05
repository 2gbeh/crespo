import React from "react";
import styled from "styled-components";
import { FaCirclePlus as FabIcon } from "react-icons/fa6";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
//
import APP from "@/constants/APP";
import PATH from "@/constants/PATH";

const Container = styled.button`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* border: 10px solid red; */
  border: 10px solid white;
  border-radius: 100%;
  position: absolute;
  top: -24px;
`;

const FAB = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(PATH.login);
  }
  //
  return (
    <Container type="button" onClick={handleClick} aria-label="Capture">
      <BsPlusCircleFill size={"3em"} color={APP.color.accent} />
    </Container>
  );
};

export default React.memo(FAB);
