import React, { useContext, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ThemeContext } from "../contexts/theme";

const AppStyleProvider: React.FC = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const mainPrimaryColor = isDarkMode ? "#F0F0F0" : "#212121";
  const mainSecondaryColor = isDarkMode ? "#727373" : "#868787";

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
          background: {
            default: isDarkMode ? "#212121" : "#F0F0F0"
          }
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
              fontFamily: "Anakotmai-medium",
            },
            label: {
              fontSize: "calc(14px + var(--btn-scale)) !important",
            },
            outlinedPrimary: {
              border: `2px solid ${mainPrimaryColor}`,
              "&:hover": {
                border: `2px solid ${mainPrimaryColor}`,
              },
            },
          },
        },
      }),
    [isDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppStyleProvider;
