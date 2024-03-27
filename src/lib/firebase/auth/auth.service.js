export const authPipe = (response) => {
  if (response?.code) {
    return {
      "auth/network-request-failed": {
        status: 400,
        statusText: "BAD_REQUEST",
        message: response.code,
      },
      "auth/invalid-email": {
        status: 422,
        statusText: "UNPROCESSABLE_CONTENT",
        message: response.code,
      },
      "auth/invalid-login-credentials": {
        status: 404,
        statusText: "NOT_FOUND",
        message: response.code,
      },
    }[response.code];
  }
  return {
    status: 200,
    statusText: "OK",
    data: response,
  };
};
