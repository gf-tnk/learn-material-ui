import React from "react";
import SystemDesign from "./components/SystemDesign/SystemDesign";
import theme from "./themes/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeContextProvider from "./contexts/theme";
import ThemeProvider from "./themes/theme";

function App() {
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
