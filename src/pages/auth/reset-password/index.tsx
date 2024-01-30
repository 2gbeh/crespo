import { Link } from "react-router-dom";
import { LuKeyRound as KeyIcon } from "react-icons/lu";
import { Head } from "@/components";
import GoBack from "@/components/GoBack";
//
import PATH from "constants/PATH";
import M from "constants/MOCK";
import Styled from "../_auth/auth.module";
import useAuth from "../_auth/useAuth";
import useResetPassword, { initialFormData } from "./useResetPassword";

export default function ResetPassword() {
  const { formData, updateFormData } = useAuth(initialFormData);
  //
  return (
    <>
      <Head title="Reset Password" />
      <GoBack />
      <Styled.container>
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
      </Styled.container>
    </>
  );
}
