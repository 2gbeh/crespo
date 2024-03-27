import React from "react";
import { FormSelect, FormError } from "@/components/Form";
import { EGender } from "@/constants/enums/Person";
import EnumHelper from "@/utils/helpers/EnumHelper";
//
import type { TFormControl } from "../CREATE_MEMBER";

const Gender = ({ self: { M, register, errors } }: TFormControl) => {
  return (
    <>
      <FormSelect
        label="Gender"
        id="gender"
        options={EnumHelper.asOptions(EGender)}
      />
      {/* <FormError error={errors.gender} /> */}
    </>
  );
};

export default React.memo(Gender);
