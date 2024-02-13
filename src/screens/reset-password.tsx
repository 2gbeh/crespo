import { LuKeyRound as KeyIcon } from "react-icons/lu";
import { Link, Head, ActivityIndicator } from "@/common/components";
//
import PATH from "constants/PATH";
import Styled from "@/modules/Auth/Auth.module";
import useAuth from "@/modules/Auth/useAuth";
import useResetPassword, {
  initialFormData,
} from "@/modules/ResetPassword/useResetPassword";

export default function ResetPasswordScreen() {
  const { formData, updateFormData } = useAuth(initialFormData);
  const { handleSubmit, submitting } = useResetPassword(formData);

  //
  return (
    <>
      <Head title="Reset Password" />

      {/* CONTENT */}
      <Styled.Container>
        <h1>Reset Password</h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} autoComplete="on">
          <fieldset disabled={submitting}>
            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                type="text"
                id="password"
                name="password"
                defaultValue={formData.password}
                onChange={updateFormData}
                required
              />
              <i>
                <KeyIcon />
              </i>
            </div>

            <label htmlFor="confirm_password">Confirm Password</label>
            <div className="relative">
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                defaultValue={formData.confirm_password}
                onChange={updateFormData}
                required
              />
              <i>
                <KeyIcon />
              </i>
            </div>

            {/* BUTTON */}
            <button>
              {" "}
              {submitting ? (
                <ActivityIndicator size={16} text={"Please wait..."} />
              ) : (
                "Update"
              )}
            </button>
          </fieldset>
        </form>

        {/* NAV */}
        <nav>
          <Link to={PATH.forgot_password}>Forgot Password</Link>
        </nav>
      </Styled.Container>
    </>
  );
}
