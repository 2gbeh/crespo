import React, { useRef, useState } from "react";
import Styled, { styles } from "../Form.module";
import FormLabel from "./Label";

interface IFormPassword extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon: React.ReactNode[];
}

const FormPassword = ({ label, icon, ...inputProps }: IFormPassword) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [show, setShow] = useState(false);
  function toggleInputType() {
    let { type } = inputRef.current as HTMLInputElement;
    if (inputRef.current && inputRef.current.type)
      inputRef.current.type = type === "password" ? "text" : "password";
    setShow((prev) => !prev);
  }
  //
  return (
    <>
      {/* IF LABEL */}
      {label && <FormLabel id={inputProps.id!} text={label} />}

      {/* INPUT */}
      <Styled.Wrapper>
        <Styled.Input ref={inputRef} {...inputProps} />
        <i onClick={toggleInputType}>{show ? icon[0] : icon[1]}</i>
      </Styled.Wrapper>
    </>
  );
};

export default React.memo(FormPassword);
