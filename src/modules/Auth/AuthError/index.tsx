import Head from "@/components/Head";
import { useNavigate, useLocation, useRouteError } from "react-router-dom";
//
import Styled, { styles } from "./AuthError.module";
import ErrorPipe, { type TError, mockError } from "./AuthError.pipe";

export default function AuthError() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const error: unknown = useRouteError();
  let E = ErrorPipe((error as TError)?.internal, pathname);
  console.log("🚀 ~ AuthError ~ error:", JSON.stringify(error));

  return (
    <Styled.Conatiner>
      <Head title={E.title} />
      <h1>{E.h1}</h1>
      <article>
        <h2>{E.h2}</h2>
        <p>{E.p}</p>
      </article>
      <button onClick={() => navigate(E.button.navigateTo)}>
        {E.button.icon}
        {E.button.text}
      </button>
    </Styled.Conatiner>
  );
}
