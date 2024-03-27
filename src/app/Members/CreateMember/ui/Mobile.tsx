import React from "react";
import { FormInput, FormError } from "@/components/Form";
//
import type { TFormControl } from "../CREATE_MEMBER";

const Mobile = ({ self: { M, register, errors } }: TFormControl) => {
  return !M.members_create ? (
    <>
      <FormInput
        label="WhatsApp Number"
        type="tel"
        id="mobile"
        {...register("mobile")}
      />
      <FormError error={errors.mobile} />
    </>
  ) : null;
};

export default React.memo(Mobile);
