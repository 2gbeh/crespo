// "use client";

import { createContext, useState } from "react";
import {
  ETheme,
  TTheme,
  IThemeContext,
  initialThemeContext,
} from "./ThemeContext.type";

// import ThemeContext from "@/context/ThemeContext";
// const themeContext | {theme, setTheme, toggleTheme} = React.useContext(ThemeContext);
const ThemeContext = createContext<IThemeContext>(initialThemeContext);

// import { ThemeContextProvider } from "@/context/ThemeContext";
// <ThemeContextProvider>{children}</ThemeContextProvider>
export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<TTheme>(ETheme.light);
  const toggleTheme = () =>
    setTheme((prev) => (prev === ETheme.light ? ETheme.dark : ETheme.light));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;