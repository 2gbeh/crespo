import React from "react";
import { FormSelect, FormError } from "@/components/Form";
import { AgeGroup as EAgeGroup } from "@/constants/enums/Person";
import EnumHelper from "@/utils/helpers/EnumHelper";
//
import type { TFormControl } from "../CREATE_MEMBER";

const AgeGroup = ({ self: { M, register, errors } }: TFormControl) => {
  return (
    <>
      <FormSelect
        label="Age Group"
        id="age_group"
        options={EnumHelper.asOptions(EAgeGroup, false)}
      />
      {/* <FormError error={errors.age_group} /> */}
    </>
  );
};

export default React.memo(AgeGroup);
