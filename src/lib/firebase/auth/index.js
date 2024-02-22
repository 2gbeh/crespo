import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "../config";

const auth = getAuth();

export async function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => authPipe(userCredential.user))
    .catch((error) => authPipe(error));
}

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => authPipe(userCredential.user))
    .catch((error) => authPipe(error));
}

export async function logout(handleLogout) {
  return signOut(auth)
    .then(handleLogout)
    .catch((error) => authPipe(error));
}

const authPipe = (res) => {
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
