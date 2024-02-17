import React from "react";
import Styled, { styles } from "../Form.module";
import FormLabel from "./Label";

interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const FormInput = ({ label, icon, ...inputProps }: IFormInput) => {
  return (
    <>
      {/* IF LABEL */}
      {label && <FormLabel id={inputProps.id!} text={label} />}

      {/* INPUT | INPUT + ICON */}
      {icon ? (
        <Styled.Wrapper>
          <Styled.Input {...inputProps} />
          <i>{icon}</i>
        </Styled.Wrapper>
      ) : (
        <Styled.Input {...inputProps} />
      )}
    </>
  );
};

export default React.memo(FormInput);
