import React from "react";
import { type FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as firebaseFirestore from "@/lib/firebase/firestore";
import { zzz } from "@/utils";
import M from "@/constants/MOCK";
//
import {
  registerSchema,
  TRegisterSchema,
  initialFormData,
} from "./TRY_REGISTER";

export default function useTryRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: M.test_register ? initialFormData : undefined,
  });

  async function postUser(formData: FieldValues) {
    console.log("🚀 ~ postUser ~ formData:", formData);

    const response = M.test_register
      ? await zzz()
      : await firebaseFirestore.add("users", formData);

    console.log("🚀 ~ postUser ~ response: ", response);

    if (response.status == 200) {
      reset(undefined, {});
    }

    setError("root", { message: response?.message });
  }

  return { M, register, handleSubmit, errors, isSubmitting, postUser };
}
