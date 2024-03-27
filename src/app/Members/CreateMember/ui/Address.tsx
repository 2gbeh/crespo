import React from "react";
import { FormInput, FormError } from "@/components/Form";
//
import type { TFormControl } from "../CREATE_MEMBER";

const Gender = ({ self: { M, register, errors } }: TFormControl) => {
  return !M.members_create ? (
    <>
      {/* ADDRESS */}
      <FormInput label="Home Address" type="text" id="address" name="address" />
      {/* <FormError error={errors.address} /> */}
    </>
  ) : null;
};

export default React.memo(Gender);
