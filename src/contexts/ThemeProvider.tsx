import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { ThemeContextInterface, ThemeType } from "../types/types";

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeType>((): ThemeType => {
    return localStorage.getItem("HarshPortfolioTheme") === "dark"
      ? "dark"
      : "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.body.classList.toggle("dark");
    localStorage.setItem("HarshPortfolioTheme", theme)
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
