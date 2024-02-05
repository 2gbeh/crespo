import { LuKeyRound as KeyIcon } from "react-icons/lu";
import { Link, Head } from "@/common/components";
import GoBack from "@/components/GoBack";
//
import PATH from "constants/PATH";
import Styled from "@/modules/Auth/Auth.module";
import useAuth from "@/modules/Auth/useAuth";
import useResetPassword, {
  initialFormData,
} from "@/modules/Auth/ResetPassword/useResetPassword";

export default function ResetPasswordScreen() {
  const { formData, updateFormData } = useAuth(initialFormData);
  //
  return (
    <>
      <Head title="Reset Password" />
      <GoBack />

      {/* CONTENT */}
      <Styled.Container>
        <h1>Reset Password</h1>

        {/* FORM */}
        <form autoComplete="on">
          <fieldset disabled={false}>
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
            <button>Update</button>
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
