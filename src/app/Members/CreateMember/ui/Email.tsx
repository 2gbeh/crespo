import React from "react";
import { FormInput, FormError } from "@/components/Form";
//
import type { TFormControl } from "../CREATE_MEMBER";

const Email = ({ self: { M, register, errors } }: TFormControl) => {
  return !M.members_create ? (
    <>
      <FormInput
        label="Email Address"
        type="email"
        id="email"
        name="email"
        placeholder="Ex. example@domain.com"
      />
      {/* <FormError error={errors.email} /> */}
    </>
  ) : null;
};

export default React.memo(Email);
