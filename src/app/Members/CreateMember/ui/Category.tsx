import React from "react";
import { FormSelect, FormError } from "@/components/Form";
import { ECategory } from "@/constants/enums/Lists";
import EnumHelper from "@/utils/helpers/EnumHelper";
//
import type { TFormControl } from "../CREATE_MEMBER";

const Category = ({ self: { M, register, errors } }: TFormControl) => {
  return !M.members_create ? (
    <>
      <FormSelect
        label="Category*"
        id="category"
        options={EnumHelper.asOptions(ECategory)}
        required
        {...register("category")}
      />
      <FormError error={errors.category} />
    </>
  ) : null;
};

export default React.memo(Category);
