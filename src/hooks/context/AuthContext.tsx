// "use client";

import React from "react";
import secureLocalStorage from "react-secure-storage";

enum EType {
  Store = "STORE",
  Destroy = "DESTROY",
}

type TUser = Record<string, unknown> | null;

type TPayload = TUser | undefined;

type TAction = {
  type: EType;
  payload?: TPayload;
};

function useAuthReducer() {
  const STORAGE_KEY = "auth";

  const [auth, dispatch] = React.useReducer(
    (state: TUser, { type, payload }: TAction) => {
      console.log("🚀 ~ useAuthReducer ~ state:", state);
      switch (type) {
        case EType.Store: {
          secureLocalStorage.setItem(
            STORAGE_KEY,
            payload as Record<string, unknown>
          );
          return {
            ...state,
            value: payload,
          };
        }
        case EType.Destroy: {
          secureLocalStorage.removeItem(STORAGE_KEY);
          return {
            ...state,
            value: null,
          };
        }
        default:
          return state;
      }
    },
    secureLocalStorage.getItem(STORAGE_KEY) as TUser
  );

  const store = (payload?: TPayload) =>
    dispatch({ type: EType.Store, payload });

  const destory = () => dispatch({ type: EType.Destroy });

  return {
    auth,
    store,
    destory,
  };
}

interface IAuthContext {
  auth: TUser;
  store: (user: TUser) => void;
  destory: () => void;
}

const initialAuthContext: IAuthContext = {
  auth: null,
  store: () => undefined,
  destory: () => undefined,
};

// const authContext = React.useContext(AuthContext);
export const AuthContext = React.createContext<IAuthContext>(initialAuthContext);

// <AuthContextProvider>{children}</AuthContextProvider>
export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { auth, store, destory } = useAuthReducer();

  return (
    <AuthContext.Provider value={{ auth, store, destory }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext