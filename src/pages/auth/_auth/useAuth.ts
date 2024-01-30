import { ChangeEvent, MutableRefObject, useRef, useState } from "react";

export default function useAuth(initialFormData: Record<string, string>) {
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  //
  function updateFormData(ev: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value.trim(),
    });
  }

  function togglePassword() {
    let { type } = passwordRef.current as HTMLInputElement;
    if (passwordRef.current && passwordRef.current.type)
      passwordRef.current.type = type === "password" ? "text" : "password";
    setShowPassword((prev) => !prev);
  }
  //
  return {
    passwordRef,
    formData,
    setFormData,
    showPassword,
    setShowPassword,
    updateFormData,
    togglePassword,
  };
}
