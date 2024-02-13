import { ChangeEvent, MutableRefObject, useRef, useState } from "react";

export default function useAuth(initialFormData: Record<string, string>) {
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  function toggleConfirmPassword() {
    let { type } = confirmPasswordRef.current as HTMLInputElement;
    if (confirmPasswordRef.current && confirmPasswordRef.current.type)
      confirmPasswordRef.current.type = type === "password" ? "text" : "password";
    setShowConfirmPassword((prev) => !prev);
  }
  //
  return {
    passwordRef,
    confirmPasswordRef,
    formData,
    setFormData,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    updateFormData,
    togglePassword,
    toggleConfirmPassword,
  };
}
