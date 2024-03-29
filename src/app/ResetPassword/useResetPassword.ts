import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
//
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";
import { zzz } from "@/utils";

export const initialFormData = M.auth
  ? {
      password: "_Thatzentryb0y",
      confirm_password: "_Thatzentryb0y",
    }
  : {
      password: "",
      confirm_password: "",
    };

export default function useResetPassword(formData: Record<string, string>) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  //
  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitting(true);
    console.log("🚀 ~ useResetPassword ~ formData:", formData);
    await zzz();
    navigate(PATH.login);
    setSubmitting(false);
  }
  //
  return {
    handleSubmit,
    submitting,
  };
}
