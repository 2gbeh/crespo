import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/components/radix-ui/toast/use-toast";
//
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";
import * as firebaseAuth from "@/lib/firebase/auth";
import { zzz } from "@/utils";

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
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  //
  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setSubmitting(true);
    console.log("🚀 ~ useLogin ~ formData:", formData);
    const res = await firebaseAuth.login(formData.username, formData.password);
    console.log("🚀 ~ handleSubmit ~ res:", res);
    toast({
      title: "Status: " + res.errno,
      description: res.error + " intended:" + location.state.intended,
    });
    navigate(location?.state?.intended || PATH.dashboard);
    setSubmitting(false);
  }
  //
  return {
    handleSubmit,
    submitting,
  };
}
