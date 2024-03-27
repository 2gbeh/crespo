import React from "react";
import type { FieldError } from "react-hook-form";

type TFormError = {
  error: FieldError | undefined;
};

const FormError = ({ error }: TFormError) => {
  return error ? (
    <div className="mt-1 truncate text-xs text-red-500">{error?.message}</div>
  ) : null;
};

export default React.memo(FormError);
