import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/radix-ui/toast/use-toast";
import { useIntended } from "@/components/Intended";
import AuthContext from "@/hooks/context/AuthContext";
import * as firebaseAuth from "@/lib/firebase/auth";
import { zzz } from "@/utils";
//
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";

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
  const navigate = useNavigate();
  const intended = useIntended();
  const authContext = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  //
  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitting(true);
    if (M.auth) {
      await zzz();
      navigate(PATH.dashboard);
      console.log("🚀 ~ useLogin ~ formData:", formData);
    } else {
      const res = await firebaseAuth.login(
        formData.username,
        formData.password
      );
      setSubmitting(false);
      console.log("🚀 ~ handleSubmit ~ res:", res);
      if (res.errno == 200) {
        authContext.setAuth(res.data);
        intended();
      } else {
        toast({
          title: "Status: " + res.errno,
          description: res.error,
        });
      }
    }
  }
  //
  return {
    handleSubmit,
    submitting,
  };
}
