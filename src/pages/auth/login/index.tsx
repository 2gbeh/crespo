import { Link } from "react-router-dom";
import { FiUser as UserIcon } from "react-icons/fi";
import { FaRegEyeSlash as EyeCrossIcon } from "react-icons/fa6";
import { FiEye as EyeIcon } from "react-icons/fi";
import { Head } from "@/components";
import ActivityIndicator from "@/components/ActivityIndicator";
//
import PATH from "constants/PATH";
import Styled from "../_auth/auth.module";
import useAuth from "../_auth/useAuth";
import useLogin, { initialFormData } from "./useLogin";

export default function Login() {
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
      <Styled.container>
        {/* <h1>Welcome back</h1> */}
        <h1>Login</h1>
        <form onSubmit={handleSubmit} autoComplete="on">
          <fieldset disabled={submitting}>
            {/* USERNAME */}
            <label htmlFor="username">Username</label>
            <div className="relative">
              <input
                type="text"
                id="username"
                name="username"
                defaultValue={formData.username}
                onChange={updateFormData}
                required
              />
              <i>
                <UserIcon />
              </i>
            </div>

            {/* PASSWORD */}
            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
                defaultValue={formData.password}
                onChange={updateFormData}
                required
              />
              <i onClick={togglePassword}>
                {showPassword ? <EyeCrossIcon /> : <EyeIcon />}
              </i>
            </div>

            {/* BUTTON */}
            <button>
              {submitting ? (
                <ActivityIndicator size={16} text={"Please wait..."} />
              ) : (
                "Log in"
              )}
            </button>
          </fieldset>
        </form>

        {/* NAV */}
        <nav>
          <Link to={PATH.forgot_password}>Forgot Password?</Link>
        </nav>
      </Styled.container>
    </>
  );
}
