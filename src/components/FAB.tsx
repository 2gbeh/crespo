import React from "react";
import styled from "styled-components";
import { FaCirclePlus as FabIcon } from "react-icons/fa6";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Dialog from "./Dialog";
//
import APP from "@/constants/APP";
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";

const Container = styled.button`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* border: 10px solid red; */
  border: 5px solid white;
  border-radius: 100%;
  position: absolute;
  top: -14px;
  left: 42%;
`;

const FAB = () => {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = React.useState(Boolean(M.capture));
  //
  return (
    <>
      <Container
        type="button"
        onClick={() => setShowDialog(true)}
        aria-label="Capture"
      >
        <BsPlusCircleFill size={"3em"} color={APP.color.accent} />
      </Container>

      {/* DIALOG */}
      {showDialog && (
        <Dialog
          show={showDialog}
          onClose={() => setShowDialog(false)}
          onContinue={() => navigate(PATH.login)}
        />
      )}
    </>
  );
};

export default React.memo(FAB);
