import React from "react";
import styled from "styled-components";

type TFormLabel = { id: string; text: string };

const FormLabel = ({ id, text }: TFormLabel) => {
  let isRequired = text.slice(-1) === "*";
  return (
    <Label htmlFor={id}>
      {isRequired ? (
        <>
          {text.slice(0, -1)}
          <sub>*</sub>
        </>
      ) : (
        text
      )}
    </Label>
  );
};

export default React.memo(FormLabel);

const Label = styled.label`
  color: #777;
  /* background-color: red; */
  margin-top: 20px;
  font-size: 14px;
  display: inline-block;

  sub {
    color: red;
    font-size: 18px;
    margin-left: 4px;
  }
`;
