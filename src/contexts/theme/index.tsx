import React, { useState, useContext } from "react";

interface Props {
  viewMode: boolean | undefined;
  setViewMode: (value: boolean) => void;
}
export const ThemeContext = React.createContext<Props>({
  viewMode: false,
  setViewMode: () => {},
});
const ThemeContextProvider = (props: { children: React.ReactNode }) => {
  const [viewMode, setViewMode] = useState<boolean>(true);

  return (
    <ThemeContext.Provider
      value={{
        viewMode,
        setViewMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
