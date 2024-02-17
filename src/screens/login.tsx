import { FiUser as UserIcon } from "react-icons/fi";
import { FaRegEyeSlash as EyeCrossIcon } from "react-icons/fa6";
import { FiEye as EyeIcon, FiLogIn } from "react-icons/fi";
import { TbLogin2 as LoginIcon } from "react-icons/tb";
import { Link, Flex, Head, ActivityIndicator } from "@/common/components";
import {
  FormFieldset,
  FormInput,
  FormPassword,
  FormButton,
} from "@/components/Form";
import OAuth from "@/components/OAuth";
//
import PATH from "constants/PATH";
import Styled from "@/modules/Auth/Auth.module";
import useAuth from "@/modules/Auth/useAuth";
import useLogin, { initialFormData } from "@/modules/Login/useLogin";

export default function LoginScreen() {
  const {
    passwordRef,
    formData,
    showPassword,
    updateFormData,
    togglePassword,
  } = useAuth(initialFormData);
  const { handleSubmit, submitting } = useLogin(formData);
  //
  return (
    <>
      <Head />

      {/* CONTENT */}
      <Styled.Container>
        <h1>Welcome back</h1>
        <FormFieldset
          onSubmit={handleSubmit}
          autoComplete="on"
          disabled={submitting}
        >
          {/* USERNAME */}
          <FormInput
            label="Email or Phone"
            type="text"
            id="username"
            name="username"
            defaultValue={formData.username}
            onChange={updateFormData}
            required
            icon={<UserIcon />}
          />

          {/* PASSWORD */}
          <FormPassword
            label="Password"
            type="password"
            id="password"
            name="password"
            defaultValue={formData.password}
            onChange={updateFormData}
            required
            icon={[<EyeCrossIcon />, <EyeIcon />]}
          />
          <Link to={PATH.forgot_password}>Forgot Password?</Link>

          {/* BUTTON */}
          <FormButton text="Log in" disabled={submitting} />
        </FormFieldset>

        {/* NAV */}
        <nav>
          Don't have an account?
          <Link to={PATH.register}>Register</Link>
        </nav>

        {/* OAUTH */}
        <OAuth />
      </Styled.Container>
    </>
  );
}
