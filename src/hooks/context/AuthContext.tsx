import React, { createContext, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

type TValue = Record<string, unknown>;
type TState = TValue | null;

const STORAGE_KEY = "secure-auth";

// const authContext = React.useContext(AuthContext);
export const AuthContext = createContext<{
  auth: TState;
  setAuth: React.Dispatch<React.SetStateAction<TState>>;
}>({ auth: null, setAuth: () => undefined });

// <AuthContextProvider>{children}</AuthContextProvider>
export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [auth, setAuth] = useState<TState>(
    secureLocalStorage.getItem(STORAGE_KEY) as TValue
  );
  useEffect(() => {
    auth
      ? secureLocalStorage.setItem(STORAGE_KEY, auth)
      : secureLocalStorage.removeItem(STORAGE_KEY);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
