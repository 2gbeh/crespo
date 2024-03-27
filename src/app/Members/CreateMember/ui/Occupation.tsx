import React from "react";
import { FormInput, FormError } from "@/components/Form";
//
import type { TFormControl } from "../CREATE_MEMBER";

const Occupation = ({ self: { M, register, errors } }: TFormControl) => {
  return (
    <>
      <FormInput
        label="Occupation"
        type="search"
        id="occupation"
        name="occupation"
        placeholder="Ex. Fashion Designer"
      />
      {/* <FormError error={errors.occupation} /> */}
    </>
  );
};

export default React.memo(Occupation);
