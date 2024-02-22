import { FormEvent, useContext, useState } from "react";
import { useToast } from "@/components/radix-ui/toast/use-toast";
import { useIntended } from "@/components/Intended";
//
import M from "@/constants/MOCK";
import * as firebaseAuth from "@/lib/firebase/auth";
import AuthContext from "@/hooks/context/AuthContext";

export const initialFormData = M.auth
  ? {
      username: "tugbeh.osaretin@gmail.com",
      password: "_Thatcrespob0y",
    }
  : {
      username: "",
      password: "",
    };

export default function useLogin(formData: Record<string, string>) {
  const { toast } = useToast();
  const intended = useIntended();
  const { store: storeAuth } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  //
  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitting(true);
    // console.log("🚀 ~ useLogin ~ formData:", formData);
    const res = await firebaseAuth.login(formData.username, formData.password);
    console.log("🚀 ~ handleSubmit ~ res:", res);
    setSubmitting(false);

    if (res.errno == 200) {
      storeAuth(res.data);
      intended();
    } else {
      toast({
        title: "Status: " + res.errno,
        description: res.error,
      });
    }
  }
  //
  return {
    handleSubmit,
    submitting,
  };
}
