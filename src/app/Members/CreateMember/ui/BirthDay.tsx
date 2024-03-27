import React from "react";
import { FormSelect, FormError } from "@/components/Form";
import { NumberSeries } from "@/constants/enums/Calendar";
//
import type { TFormControl } from "../CREATE_MEMBER";

const BirthDay = ({ self: { M, register, errors } }: TFormControl) => {
  return (
    <>
      <FormSelect
        label="Day of Birth"
        id="birth_day"
        options={NumberSeries()}
      />
      {/* <FormError error={errors.birth_day} /> */}
    </>
  );
};

export default React.memo(BirthDay);
