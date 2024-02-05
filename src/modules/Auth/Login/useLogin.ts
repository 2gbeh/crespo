import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
//
import PATH from "constants/PATH";
import M from "constants/MOCK";
import { zzz } from "@/utils";

export const initialFormData = M.auth
  ? {
      username: "webmaster",
      password: "_Thatcrespob0y",
    }
  : {
      username: "",
      password: "",
    };

export default function useLogin(formData: Record<string, string>) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  //
  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitting(true);
    console.log("🚀 ~ useLogin ~ formData:", formData);
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
