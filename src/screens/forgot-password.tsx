import { FaRegEnvelope as EmailIcon } from "react-icons/fa6";
import { Link, Head } from "@/common/components";
import GoBack from "@/components/GoBack";
//
import PATH from "constants/PATH";
import Styled from "@/modules/Auth/Auth.module";
import useAuth from "@/modules/Auth/useAuth";
import useForgotPassword, {
  initialFormData,
} from "@/modules/Auth/ForgotPassword/useForgotPassword";

export default function ForgotPasswordScreen() {
  const { formData, updateFormData } = useAuth(initialFormData);
  //
  return (
    <>
      <Head title="Forgot Password" />
      <GoBack />

      {/* CONTENT */}
      <Styled.Container>
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
      </Styled.Container>
    </>
  );
}
