import { FiUser as UserIcon } from "react-icons/fi";
import { FaRegEyeSlash as EyeCrossIcon } from "react-icons/fa6";
import { FiEye as EyeIcon } from "react-icons/fi";
import { Link, Head, ActivityIndicator } from "@/common/components";
import OAuth from "@/components/OAuth";
//
import PATH from "@/constants/PATH";
import Styled from "@/modules/Auth/Auth.module";
import useAuth from "@/modules/Auth/useAuth";
import useRegister, { initialFormData } from "@/modules/Register/useRegister";

export default function RegisterScreen() {
  const {
    passwordRef,
    confirmPasswordRef,
    formData,
    showPassword,
    showConfirmPassword,
    updateFormData,
    togglePassword,
    toggleConfirmPassword,
  } = useAuth(initialFormData);
  const { handleSubmit, submitting } = useRegister(formData);
  //
  return (
    <>
      <Head title="Register" />

      {/* CONTENT */}
      <Styled.Container>
        <h1>Create account</h1>
        <form onSubmit={handleSubmit} autoComplete="on">
          <fieldset disabled={submitting}>
            {/* USERNAME */}
            <label htmlFor="names">Full Name</label>
            <div className="relative">
              <input
                type="text"
                id="names"
                name="names"
                placeholder="Surname first"
                defaultValue={formData.names}
                onChange={updateFormData}
                required
              />
              <i>
                <UserIcon />
              </i>
            </div>

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
            </div>

            {/* PASSWORD */}
            <label htmlFor="confirm_password">Confirm Password</label>
            <div className="relative">
              <input
                ref={confirmPasswordRef}
                type="password"
                id="confirm_password"
                name="confirm_password"
                defaultValue={formData.confirm_password}
                onChange={updateFormData}
                required
              />
              <i onClick={toggleConfirmPassword}>
                {showConfirmPassword ? <EyeCrossIcon /> : <EyeIcon />}
              </i>
            </div>

            {/* BUTTON */}
            <button>
              {submitting ? (
                <ActivityIndicator size={16} text={"Please wait..."} />
              ) : (
                "Register"
              )}
            </button>
          </fieldset>
        </form>

        {/* NAV */}
        <nav>
          Already have an account?
          <Link to={PATH.login}>Log in</Link>
        </nav>

        {/* OAUTH */}
        <OAuth />
      </Styled.Container>
    </>
  );
}
