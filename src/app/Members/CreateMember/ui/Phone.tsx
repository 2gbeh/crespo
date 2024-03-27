import React from "react";
import { FormInput, FormError } from "@/components/Form";
//
import type { TFormControl } from "../CREATE_MEMBER";

const Phone = ({ self: { M, register, errors } }: TFormControl) => {
  return !M.members_create ? (
    <>
      <FormInput
        label="Phone Number*"
        type="tel"
        id="phone"
        required
        {...register("phone")}
      />
      <FormError error={errors.phone} />
    </>
  ) : null;
};

export default React.memo(Phone);
