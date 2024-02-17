import React, { useRef, useState } from "react";
import Styled, { styles } from "../Form.module";

interface IFormFieldset extends React.FormHTMLAttributes<HTMLFormElement> {
  disabled: boolean;
}

const FormFieldset = ({ children, disabled, ...formProps }: IFormFieldset) => {
  return (
    <form {...formProps}>
      <fieldset disabled={disabled}>{children}</fieldset>
    </form>
  );
};

export default React.memo(FormFieldset);
