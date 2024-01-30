import { FormEvent, useState } from "react";
import { zzz } from "@/utils";
// 
import M from "constants/MOCK";

export const initialFormData = M.auth
  ? {
      email: "etugbeh@outlook.com",
    }
  : {
      email: "",
    };

export default function useForgotPassword(formData: Record<string, string>) {
  const [submitting, setSubmitting] = useState(false);
  //
  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitting(true);
    console.log("🚀 ~ useForgotPassword ~ formData:", formData);
    await zzz();
    setSubmitting(false);
  }
  //
  return {
    handleSubmit,
    submitting,
  };
}
