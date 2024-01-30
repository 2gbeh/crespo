import { Link } from "react-router-dom";
import { FaRegEnvelope as EmailIcon } from "react-icons/fa6";
import { Head } from "@/components";
import GoBack from "@/components/GoBack";
//
import PATH from "constants/PATH";
import M from "constants/MOCK";
import Styled from "../_auth/auth.module";
import useAuth from "../_auth/useAuth";
import useForgotPassword, { initialFormData } from "./useForgotPassword";

export default function ForgotPassword() {
  const { formData, updateFormData } = useAuth(initialFormData);
  //
  return (
    <>
      <Head title="Forgot Password" />
      <GoBack />
      <Styled.container>
        <h1>Forgot Password</h1>

        {/* FORM */}
        <form autoComplete="on">
          <fieldset disabled={false}>
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
            <button>Send</button>
          </fieldset>
        </form>

        {/* NAV */}
        <nav>
          <Link to={PATH.reset_password}>Log in</Link>
        </nav>
      </Styled.container>
    </>
  );
}
