import { useRouteError } from "react-router-dom";

export default function AuthError() {
  const error = useRouteError();
  console.log("🚀 ~ AuthError ~ error:", error)

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}