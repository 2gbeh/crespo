import { FaChevronLeft, FaSyncAlt } from "react-icons/fa";

export type TError = {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: object;
};

export const mockError = {
  status: 404,
  statusText: "Not Found",
  internal: true,
  data: 'Error: No route matches URL "/dashboard/profile/edit"',
  error: {},
};

export default function ErrorPipe(hasError: boolean, pathname: string) {
  return hasError
    ? {
        title: "Not Found",
        h1: 404,
        h2: "Not Found",
        p: (
          <>
            Uhm, it appears the requested path <b>{pathname}</b> does not exist
            or has been moved permanently.
          </>
        ),
        button: {
          icon: <FaChevronLeft />,
          navigateTo: -1,
          text: "Go Back",
        },
      }
    : {
        title: "Internal Server Error",
        h1: 500,
        h2: "Internal Server Error",
        p: (
          <>
            Uhm, it appears the server has encountered an error that
            prevents it from fulfilling this request.
          </>
        ),
        button: {
          icon: <FaSyncAlt />,
          navigateTo: 0,
          text: "Reload",
        },
      };
}
