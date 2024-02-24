import React from "react";
import styled from "styled-components";
import { GoAlert } from "react-icons/go";
import Modal from "react-bootstrap/Modal";
import { Flex, Border } from "@/common/components";
//
import COLOR from "@/constants/COLOR";

type TModal = {
  show?: boolean;
  onClose?: () => void;
  onContinue?: () => void;
  processing?: boolean;
};

const DialogAlert = ({ show, onClose, onContinue, processing }: TModal) => {
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
          <Border $color={COLOR.danger_bg} $size={40}>
            <GoAlert color={COLOR.danger_fg} size={"1.5em"} />
          </Border>
          <b>Are you sure?</b>
          <p>
            This action will clear your current session data and log you out of
            the app.
          </p>
        </Flex.CenterCenter>
        <Flex.CenterEnd $gap={20}>
          <button type="reset" disabled={processing} onClick={onClose}>
            Cancel
          </button>
          <button type="submit" disabled={processing} onClick={onContinue}>
            {processing ? "..." : "OK"}
          </button>
        </Flex.CenterEnd>
      </Styled.Container>
    </Modal>
  );
};

export default React.memo(DialogAlert);

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
        color: ${COLOR.brand};
        font-size: 14px;
        font-weight: 600;
      }

      &[type="submit"] {
        background-color: ${COLOR.brand};
        color: white;
        border-radius: 4px;
        padding: 5px 12px;
        font-size: 12px;
      }
    }
  `,
};
