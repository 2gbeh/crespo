import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { authPipe } from "./auth.service";

// SIGN UP
export async function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => authPipe(userCredential.user))
    .catch((error) => authPipe(error));
}

// SIGN IN
export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => authPipe(userCredential.user))
    .catch((error) => authPipe(error));
}

// SIGN OUT
export async function logout(handleLogout) {
  return signOut(auth)
    .then(handleLogout)
    .catch((error) => authPipe(error));
}
