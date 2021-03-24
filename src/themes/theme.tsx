import React, { useContext, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ThemeContext } from "../contexts/theme";

const AppStyleProvider: React.FC = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const mainPrimaryColor = isDarkMode ? "#212121" : "#F0F0F0";
  const mainSecondaryColor = isDarkMode ? "#868787" : "#727373";

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? "dark" : "light",
          primary: {
            main: mainPrimaryColor,
          },
          secondary: {
            main: mainSecondaryColor,
          },
        },
        typography: {
          fontFamily: [
            "Anakotmai-medium",
            "Anakotmai-bold",
            "Anakotmai-light",
          ].join(","),
        },
        overrides: {
          MuiButton: {
            root: {
              borderRadius: "30px",
              fontFamily: "Anakotmai-medium"
            },
          },
        },
      }),
    [isDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppStyleProvider;
