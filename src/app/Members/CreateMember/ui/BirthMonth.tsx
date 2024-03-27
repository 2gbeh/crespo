import React from "react";
import { FormSelect, FormError } from "@/components/Form";
import { EMonthShort } from "@/constants/enums/Calendar";
import EnumHelper from "@/utils/helpers/EnumHelper";
//
import type { TFormControl } from "../CREATE_MEMBER";

const BirthMonth = ({ self: { M, register, errors } }: TFormControl) => {
  return (
    <>
      <FormSelect
        label="Month of Birth"
        id="birth_month"
        options={EnumHelper.asOptions(EMonthShort)}
      />
      {/* <FormError error={errors.birth_month} /> */}
    </>
  );
};

export default React.memo(BirthMonth);
