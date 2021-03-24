import React, { useState, useContext } from "react";

interface Props {
  isDarkMode: boolean | undefined;
  setIsDarkMode: (value: boolean) => void;
}
export const ThemeContext = React.createContext<Props>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});
const ThemeContextProvider = (props: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

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
