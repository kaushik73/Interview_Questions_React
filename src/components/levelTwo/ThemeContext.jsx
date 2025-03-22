/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
}

export const ThemeProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  console.log(isLightTheme);
  return (
    <ThemeContext.Provider value={{ isLightTheme, setIsLightTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
