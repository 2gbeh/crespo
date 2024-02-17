import React from "react";
import Styled, { styles } from "../Form.module";
import FormLabel from "./Label";

interface IFormSelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  // ["Male", ...] | [{value: 'm', option: 'Male' }, ...]
  options?: string[] | Record<string, string | number>[];
}

const FormSelect = ({
  label,
  placeholder = "---",
  options = [],
  ...selectProps
}: IFormSelect) => {
  return (
    <>
      {/* IF LABEL */}
      {label && <FormLabel id={selectProps.id!} text={label} />}

      {/* SELECT */}
      <Styled.Input as="select" {...selectProps}>
        {/* PLACEHOLDER */}
        <option hidden>{placeholder}</option>

        {/* OPTIONS */}
        {options.map((e, i) => {
          let [value, option] =
            typeof e === "object" ? [e.value, e.option] : [e, e];
          return (
            <option key={i} value={value}>
              {option}
            </option>
          );
        })}
      </Styled.Input>
    </>
  );
};

export default React.memo(FormSelect);