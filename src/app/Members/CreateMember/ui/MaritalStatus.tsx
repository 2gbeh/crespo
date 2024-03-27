import React from "react";
import { FormSelect, FormError } from "@/components/Form";
import { EMaritalStatus } from "@/constants/enums/Person";
import EnumHelper from "@/utils/helpers/EnumHelper";
//
import type { TFormControl } from "../CREATE_MEMBER";

const MaritalStatus = ({ self: { M, register, errors } }: TFormControl) => {
  return (
    <>
      <FormSelect
        label="Marital Status"
        id="marital_status"
        name="marital_status"
        options={EnumHelper.asOptions(EMaritalStatus)}
      />
      {/* <FormError error={errors.marital_status} /> */}
    </>
  );
};

export default React.memo(MaritalStatus);
