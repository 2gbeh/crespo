import { FiUser as UserIcon } from "react-icons/fi";
import { FaRegEyeSlash as EyeCrossIcon } from "react-icons/fa6";
import { FiEye as EyeIcon } from "react-icons/fi";
import { Link, Head, ActivityIndicator } from "@/common/components";
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
        <form onSubmit={handleSubmit} autoComplete="on">
          <fieldset disabled={submitting}>
            {/* USERNAME */}
            <label htmlFor="username">Email or Phone</label>
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
              <Link to={PATH.forgot_password}>Forgot Password?</Link>
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
          Don't have an account?
          <Link to={PATH.register}>Register</Link>
        </nav>

        {/* OAUTH */}
        <figure>
          <figcaption>OR</figcaption>
          <div>
            <img src="/images/logo-google.png" alt="Google" title="Google" />
            <img
              src="/images/logo-facebook.png"
              alt="Facebook"
              title="Facebook"
            />
          </div>
        </figure>
      </Styled.Container>
    </>
  );
}
