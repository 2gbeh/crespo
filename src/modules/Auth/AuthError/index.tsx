import { useRouteError } from "react-router-dom";

export default function AuthError() {
  const error: unknown = useRouteError();
  console.log("🚀 ~ AuthError ~ error:", error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {(error as Error)?.message ||
          (error as { statusText?: string })?.statusText}
      </p>
    </div>
  );
}
