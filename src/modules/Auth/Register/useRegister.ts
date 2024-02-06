import { FormEvent, useState } from "react";
import { zzz } from "@/utils";
// const { zzz } = require("@/utils");
//
import M from "constants/MOCK";

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
  const [submitting, setSubmitting] = useState(false);
  //
  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitting(true);
    console.log("🚀 ~ useLogin ~ formData:", formData);
    await zzz();
    setSubmitting(false);
  }
  //
  return {
    handleSubmit,
    submitting,
  };
}

