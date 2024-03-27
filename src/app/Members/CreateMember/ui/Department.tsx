import React from "react";
import { FormSelect, FormError } from "@/components/Form";
import { EDepartment } from "@/constants/enums/Lists";
import EnumHelper from "@/utils/helpers/EnumHelper";
//
import type { TFormControl } from "../CREATE_MEMBER";

const Department = ({ self: { M, register, errors } }: TFormControl) => {
  return (
    <>
      <FormSelect
        label="Department"
        id="department"
        name="department"
        options={EnumHelper.asOptions(EDepartment)}
      />
      {/* <FormError error={errors.department} /> */}
    </>
  );
};

export default React.memo(Department);
