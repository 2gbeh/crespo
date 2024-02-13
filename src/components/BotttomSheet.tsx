import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
//
const BottomSheet = ({
  children,
  show,
  onClose,
}: {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}) => {
  return (
    <Offcanvas show={show} onHide={onClose} placement="bottom">
      {children}
    </Offcanvas>
  );
};

export default React.memo(BottomSheet);
