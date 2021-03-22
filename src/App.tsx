import React from "react";
import SystemDesign from "./components/SystemDesign/SystemDesign";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SystemDesign />
      </ThemeProvider>
    </>
  );
}

export default App;
