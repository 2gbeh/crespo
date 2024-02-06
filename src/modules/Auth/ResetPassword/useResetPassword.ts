import { FormEvent, useState } from "react";
//
import M from "constants/MOCK";
import { zzz } from "@/utils";

export const initialFormData = M.auth
  ? {
      password: "_Thatcrespob0y",
      confirm_password: "_Thatcrespob0y",
    }
  : {
      password: "",
      confirm_password: "",
    };

export default function useResetPassword(formData: Record<string, string>) {
  const [submitting, setSubmitting] = useState(false);
  //
  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitting(true);
    console.log("🚀 ~ useResetPassword ~ formData:", formData);
    await zzz();
    setSubmitting(false);
  }
  //
  return {
    handleSubmit,
    submitting,
  };
}
