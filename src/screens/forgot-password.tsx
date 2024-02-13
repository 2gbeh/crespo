import { FaRegEnvelope as EmailIcon } from "react-icons/fa6";
import { Link, Head, ActivityIndicator } from "@/common/components";
//
import PATH from "constants/PATH";
import Styled from "@/modules/Auth/Auth.module";
import useAuth from "@/modules/Auth/useAuth";
import useForgotPassword, {
  initialFormData,
} from "@/modules/ForgotPassword/useForgotPassword";

export default function ForgotPasswordScreen() {
  const { formData, updateFormData } = useAuth(initialFormData);
  const { handleSubmit, submitting } = useForgotPassword(formData);

  //
  return (
    <>
      <Head title="Forgot Password" />

      {/* CONTENT */}
      <Styled.Container>
        <h1>Forgot Password</h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} autoComplete="on">
          <fieldset disabled={submitting}>
            <label htmlFor="email">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ex. example@domain.com"
                defaultValue={formData.email}
                onChange={updateFormData}
                required
              />
              <i>
                <EmailIcon />
              </i>
              <em>
                Enter your account email to receive a password reset link.
              </em>
            </div>

            {/* BUTTON */}
            <button>
              {" "}
              {submitting ? (
                <ActivityIndicator size={16} text={"Please wait..."} />
              ) : (
                "Send"
              )}
            </button>
          </fieldset>
        </form>

        {/* NAV */}
        <nav>
          <Link to={PATH.login}>Log in</Link>
        </nav>
      </Styled.Container>
    </>
  );
}
