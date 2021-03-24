import React, { useContext, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
        overrides: {
          MuiButton: {
            root: {
              borderRadius: "30px",
            },
          },
        },
      }),
    [isDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppStyleProvider;
