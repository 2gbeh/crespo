import React from "react";
import { FormError, FormInput } from "@/components/Form";
import type { TFormControl } from "../CREATE_MEMBER";

const FullName = ({ self: { M, register, errors } }: TFormControl) => {
  return M.members_create ? (
    <>
      {/* FULL NAME */}
      <FormInput
        label="Full Name*"
        type="text"
        id="surname"
        placeholder="(surname first)"
        required
        {...register("other_names")}
      />
      <FormError error={errors.other_names} />
    </>
  ) : (
    <>
      {/* SURNAME */}
      <FormInput
        label="Surname*"
        type="text"
        id="surname"
        placeholder="Family name"
        required
        {...register("surname")}
      />
      <FormError error={errors.surname} />

      {/* OTHER NAMES */}
      <FormInput
        label="Other Names*"
        type="text"
        id="other_names"
        required
        {...register("other_names")}
      />
      <FormError error={errors.other_names} />
    </>
  );
};

export default React.memo(FullName);
