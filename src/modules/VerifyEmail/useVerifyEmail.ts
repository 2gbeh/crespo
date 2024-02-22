import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
//
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";
import { zzz } from "@/utils";

export const initialFormData = M.auth
  ? {
      email: "etugbeh@outlook.com",
    }
  : {
      email: "",
    };

export default function useVerifyEmail(formData: Record<string, string>) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  //
  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitting(true);
    console.log("🚀 ~ useVerifyEmail ~ formData:", formData);
    await zzz();
    navigate(PATH.dashboard);
    setSubmitting(false);
  }
  //
  return {
    handleSubmit,
    submitting,
  };
}
