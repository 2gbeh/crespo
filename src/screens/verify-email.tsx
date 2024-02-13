import { FiUser as UserIcon } from "react-icons/fi";
import { FaRegEyeSlash as EyeCrossIcon } from "react-icons/fa6";
import { FiEye as EyeIcon } from "react-icons/fi";
import { Link, Head, ActivityIndicator } from "@/common/components";
//
import PATH from "constants/PATH";
import Styled from "@/modules/Auth/Auth.module";
import useAuth from "@/modules/Auth/useAuth";
import useVerifyEmail, { initialFormData } from "@/modules/VerifyEmail/useVerifyEmail";

export default function VerifyEmailScreen() {
  const {
    passwordRef,
    formData,
    showPassword,
    updateFormData,
    togglePassword,
  } = useAuth(initialFormData);
  const { handleSubmit, submitting } = useVerifyEmail(formData);
  //
  return (
    <>
      <Head title="Verify Email" />

      {/* CONTENT */}
      <Styled.Container>
        <h1>Please verify your email</h1>
        <form onSubmit={handleSubmit} autoComplete="on">
          <fieldset disabled={submitting}>
            {/* ARTICLE */}
            <article>
              An email was sent to <b>example@domain.com</b>, simply click on
              the email verification link to complete your registration.
            </article>
            <article>
              If you didn't receive the email, kindly check your spam/junk
              folder, or click resend button below.
            </article>

            {/* BUTTON */}
            <button>
              {submitting ? (
                <ActivityIndicator size={16} text={"Please wait..."} />
              ) : (
                "Resend"
              )}
            </button>
          </fieldset>
        </form>

        {/* NAV */}
        <nav>
          <Link to={PATH.register}>Register</Link>
        </nav>
      </Styled.Container>
    </>
  );
}
