import { useState } from "react";
import { type FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import fakerHelper, { FakerHelper } from "@/lib/faker-js";
import * as firebaseMutation from "@/lib/firebase/firestore/mutations";
import * as firebaseQuery from "@/lib/firebase/firestore/queries";
import M from "@/constants/MOCK";
import PATH from "@/constants/PATH";
import TABLE from "@/constants/TABLE";
import fakeMembers from "@/data/members";
import { zzz } from "@/utils";
//
import {
  createMemberSchema,
  TCreateMemberSchema,
  defaultValues,
} from "@/modules/Members/CreateMember/CREATE_MEMBER";

export default function useCreateMember() {
  // fakerHelper.log(fakerHelper.getPeople);
  const { register, handleSubmit, formState, setError, reset } =
    useForm<TCreateMemberSchema>(
      !M.members_create
        ? {
            resolver: zodResolver(createMemberSchema),
            defaultValues,
          }
        : { resolver: zodResolver(createMemberSchema) },
    );

  const [isSubmitting, setIsSubmitting] = useState(formState.isSubmitting);

  async function handledSubmit(formData: FieldValues) {
    console.log("🚀 ~ handledSubmit ~ formData: before", formData);
    await zzz();
    console.log("🚀 ~ handledSubmit ~ formData: after", formData);
    reset();
    return 1;

    setError("root", { message: "Something went wrong!" });
    let data = fakeMembers[1];
    setIsSubmitting(true);
    const res = await firebaseQuery.getPaginated(TABLE.users, 0, 2);
    console.log("🚀 ~ handleSubmit ~ res:", JSON.stringify(res));

    // const res2 = await firebaseQuery.getPaginated(TABLE.users, res?.meta?.offset, 2);
    // console.log("🚀 ~ handleSubmit ~ res:", JSON.stringify(res2));
    setIsSubmitting(false);
  }
  //
  return {
    M,
    register,
    handleSubmit,
    errors: formState.errors,
    isSubmitting,
    handledSubmit,
  };
}
