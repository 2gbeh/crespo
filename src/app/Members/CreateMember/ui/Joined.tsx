import React from "react";
import { FormInput, FormError } from "@/components/Form";
//
import type { TFormControl } from "../CREATE_MEMBER";

const Joined = ({ self: { M, register, errors } }: TFormControl) => {
  return !M.members_create ? (
    <>
      <FormInput
        label="Membership Date"
        type="date"
        id="joined"
        name="joined"
      />
      {/* <FormError error={errors.joined} /> */}
    </>
  ) : null;
};

export default React.memo(Joined);
