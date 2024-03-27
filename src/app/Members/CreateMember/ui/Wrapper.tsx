import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight as NextIcon } from "react-icons/fa";
import { FormFieldset, FormButton } from "@/components/Form";
import PATH from "@/constants/PATH";
//
import type { TFormWrapper } from "../CREATE_MEMBER";

const Wrapper = ({
  children,
  self: { M, handleSubmit, handledSubmit, isSubmitting },
}: TFormWrapper) => {
  return (
    <FormFieldset
      onSubmit={handleSubmit(handledSubmit)}
      disabled={isSubmitting}
      autoComplete="on"
    >
      {/* FORM */}
      {children}

      {/* BUTTON */}
      <div className="mt-4 text-center">
        {M.members_create ? (
          <FormButton
            text="TSave"
            type="button"
            onClick={handledSubmit}
            disabled={isSubmitting}
          />
        ) : (
          <FormButton text="Save" disabled={isSubmitting} />
        )}

        {/* NAV */}
        <Link
          to={PATH.members}
          className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-brand"
        >
          Members
          <NextIcon size="1em" />
        </Link>
      </div>
    </FormFieldset>
  );
};

export default React.memo(Wrapper);
