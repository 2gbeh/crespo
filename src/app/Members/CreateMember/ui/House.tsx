import React from "react";
import { FormSelect, FormError } from "@/components/Form";
import { EHouse } from "@/constants/enums/Lists";
import EnumHelper from "@/utils/helpers/EnumHelper";
//
import type { TFormControl } from "../CREATE_MEMBER";

const House = ({ self: { M, register, errors } }: TFormControl) => {
  return (
    <>
      <FormSelect
        label="House"
        id="house"
        name="house"
        options={EnumHelper.asOptions(EHouse)}
      />
      {/* <FormError error={errors.house} /> */}
    </>
  );
};

export default React.memo(House);
