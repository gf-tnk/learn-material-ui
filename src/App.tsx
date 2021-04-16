import React, { useEffect } from "react";
import SystemDesign from "./components/DesignSystem/DesignSystem";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeContextProvider from "./contexts/theme";
import ThemeProvider from "./themes/theme";
import CategoryItem from "./components/CategoryItem/CategoryItem"

import { setFontScale, setBtnScale } from "./plugins/setScaleElement";
 
function App() {

  const DEFAULT_SCALE = "0px"

  const setScaleElement = () => {
    const fontScale = localStorage.getItem("fontScale");
    const btnScale = localStorage.getItem("btnScale");
    if (fontScale && btnScale) {
      setFontScale(fontScale.toString());
      setBtnScale(btnScale.toString());
    } else {
      setFontScale(DEFAULT_SCALE);
      setBtnScale(DEFAULT_SCALE);
    }
  };

  useEffect(() => {
    setScaleElement()
  }, [])
  

  return (
    <>
      <ThemeContextProvider>
        <ThemeProvider>
          <CssBaseline />
          <CategoryItem title="Sound" desc="sound check" hoverable={true}/>
          <CategoryItem title="Sound" desc="sound check" hoverable={false}/>
        </ThemeProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
