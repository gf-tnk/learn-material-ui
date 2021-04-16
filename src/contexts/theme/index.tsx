import React, { useState, useContext } from "react";

interface Props {
  isDarkMode: boolean | undefined;
  setIsDarkMode: (value: boolean) => void;
}
const defaultTheme = localStorage.getItem("theme") === "dark" ? true: false
export const ThemeContext = React.createContext<Props>({
  isDarkMode: defaultTheme,
  setIsDarkMode: () => {},
});
const ThemeContextProvider = (props: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(defaultTheme);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
