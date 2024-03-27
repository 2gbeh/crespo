import React from "react";
import { FormInput, FormError } from "@/components/Form";
//
import type { TFormControl } from "../CREATE_MEMBER";

const Anniversary = ({ self: { M, register, errors } }: TFormControl) => {
  return (
    <>
      <FormInput
        label="Wedding Anniversary"
        type="date"
        id="anniversary"
        name="anniversary"
      />
      {/* <FormError error={errors.anniversary} /> */}
    </>
  );
};

export default React.memo(Anniversary);
