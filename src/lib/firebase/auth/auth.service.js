export const authPipe = (res) => {
  if (res?.code) {
    return {
      "auth/network-request-failed": {
        errno: 400,
        error: "BAD_REQUEST",
        data: {},
      },
      "auth/invalid-email": {
        errno: 422,
        error: "UNPROCESSABLE_CONTENT",
        data: {},
      },
      "auth/invalid-login-credentials": {
        errno: 404,
        error: "NOT_FOUND",
        data: {},
      },
    }[res.code];
  }
  return {
    errno: 200,
    error: "OK",
    data: res,
  };
};
