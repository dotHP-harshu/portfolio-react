import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Themecontext is not ready.");

  return context;
};
