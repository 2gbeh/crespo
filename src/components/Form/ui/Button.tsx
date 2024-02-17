import React from "react";
import styled from "styled-components";
import ActivityIndicator from "@/components/ActivityIndicator";
import COLOR from "@/constants/COLOR";

interface IFormButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: React.ReactNode;
}

const FormButton = ({ children, text, ...buttonProps }: IFormButton) => {
  return (
    <Button {...buttonProps}>
      {buttonProps.disabled ? (
        <ActivityIndicator size={16} text={"Please wait..."} />
      ) : (
        children || text
      )}
    </Button>
  );
};

export default React.memo(FormButton);

const Button = styled.button`
  background: ${COLOR.brand};
  color: white;
  border-radius: 2px;
  margin-top: 20px;
  padding: 12px 10px;
  width: 100%;
  font-size: 14px;
  display: block;
  &:hover {
    background: ${COLOR.brand_dark};
  }
  &:disabled {
    background: ${COLOR.brand_shade};
  }
`;
