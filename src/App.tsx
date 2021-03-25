import React, { useEffect } from "react";
import SystemDesign from "./components/DesignSystem/DesignSystem";
import theme from "./themes/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeContextProvider from "./contexts/theme";
import ThemeProvider from "./themes/theme";

import { setFontsize } from "./plugins/setElementSize";
 
function App() {

  const setFontSizeMode = () => {
    const fontSizeMode = localStorage.getItem("fontSizeMode");
    if (fontSizeMode) {
      setFontsize(fontSizeMode + "");
    } else {
      setFontsize("0px");
    }
  };

  useEffect(() => {
    setFontSizeMode()
  }, [])
  

  return (
    <>
      <ThemeContextProvider>
        <ThemeProvider>
          <CssBaseline />
          <SystemDesign />
        </ThemeProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
