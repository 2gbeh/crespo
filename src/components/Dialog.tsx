import React from "react";
import styled from "styled-components";
import { GoAlert } from "react-icons/go";
import Modal from "react-bootstrap/Modal";
import { Flex, Border } from "@/common/components";
//
import APP from "@/constants/APP";

type TModal = { show?: boolean; onClose?: () => void; onContinue?: () => void };

const Dialog = ({ show, onClose, onContinue }: TModal) => {
  return (
    <Modal
      show={show}
      onHide={onClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Styled.Container>
        <Flex.CenterCenter $cross>
          <Border $color={APP.color.danger_bg} $size={40}>
            <GoAlert color={APP.color.danger_fg} size={"1.5em"} />
          </Border>
          <b>Are you sure?</b>
          <p>
            This action will clear your current session data and log you out of
            the app.
          </p>
        </Flex.CenterCenter>
        <Flex.CenterEnd $gap={20}>
          <button type="reset" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" onClick={onContinue}>
            OK
          </button>
        </Flex.CenterEnd>
      </Styled.Container>
    </Modal>
  );
};

export default React.memo(Dialog);

const Styled = {
  Container: styled.div`
    padding: 20px 30px;
    text-align: center;

    b {
      font-weight: 600;
    }

    p {
      color: #555;
      font-size: 14px;
    }

    button {
      margin-top: 20px;

      &[type="reset"] {
        color: ${APP.color.brand};
        font-size: 14px;
        font-weight: 600;
      }

      &[type="submit"] {
        background-color: ${APP.color.brand};
        color: white;
        border-radius: 4px;
        padding: 5px 12px;
        font-size: 12px;
      }
    }
  `,
};
