import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
//
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";
import { zzz } from "@/utils";

export const initialFormData = M.auth
  ? {
      names: "Emmanuel Tugbeh",
      username: "webmaster",
      password: "_Thatcrespob0y",
      confirm_password: "_Thatcrespob0y",
    }
  : {
      names: "",
      username: "",
      password: "",
      confirm_password: "",
    };

export default function useRegister(formData: Record<string, string>) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  //
  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitting(true);
    console.log("🚀 ~ useRegister ~ formData:", formData);
    await zzz();
    navigate(PATH.verify_email);
    setSubmitting(false);
  }
  //
  return {
    handleSubmit,
    submitting,
  };
}
