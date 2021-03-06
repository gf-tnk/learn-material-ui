import React, { useContext, useEffect } from "react";
import { createMuiTheme, ThemeProvider, fade } from "@material-ui/core/styles";
import { ThemeContext } from "../contexts/theme";

const AppStyleProvider: React.FC = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const color = {
    dark: {
      primary: "#F0F0F0",
      secondary: "#727373",
    },
    light: {
      primary: "#212121",
      secondary: "#868787",
    },
  };
  const mainPrimaryColor = isDarkMode ? color.dark.primary : color.light.primary;
  const mainSecondaryColor = isDarkMode ? color.dark.secondary : color.light.secondary;

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
            default: isDarkMode ? color.light.primary : color.dark.primary,
            paper: isDarkMode ? "#313131" : "#E0E0E0"
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
          MuiInput: {
            root: {
              backgroundColor: mainPrimaryColor,
              color: isDarkMode ? color.light.primary : color.dark.primary,
              padding:
                "calc(10px + var(--font-scale)) calc(12px + var(--font-scale))",
              fontSize: "calc(16px + var(--font-scale)) !important",
              fontFamily: "Anakotmai-light",
              height: "calc(49px + (var(--font-scale))*2)",
              borderRadius: "4px",
              position: "relative",
              "&.Mui-disabled": {
                color: isDarkMode ? color.light.primary : color.dark.primary,
                opacity: isDarkMode ? 0.3 : 0.7,
              },
            },
            underline: {
              "&&&:before": {
                borderBottom: "none",
              },
              "&&:after": {
                borderBottom: "none",
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
