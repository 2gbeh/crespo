import React from "react";

export enum ETheme {
  light = "light",
  dark = "dark",
}

// 'light' | 'dark'
export type TTheme = keyof typeof ETheme;

export interface IThemeContext {
  theme: TTheme;
  setTheme: React.Dispatch<React.SetStateAction<TTheme>>;
  toggleTheme: () => void;
}

export const initialThemeContext: IThemeContext = {
  theme: ETheme.light,
  setTheme: () => undefined,
  toggleTheme: () => undefined,
};