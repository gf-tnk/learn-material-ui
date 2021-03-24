import React, { useContext, useEffect } from "react";
import {
  Switch,
  Button,
  Typography,
  Paper,
  Slider,
  Container,
} from "@material-ui/core";
import { ThemeContext } from "../../contexts/theme";

const SystemDesign = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const valuetext = (value: number) => `${value}°C`;

  return (
    <>
      <Container>
        <h1 className="wh1">System Design</h1>
        <h2 className="wh2">Theme</h2>
        <Switch checked={isDarkMode} onChange={handleThemeChange}/>
        <h2 className="wh2">Font Size</h2>
        <Slider
          defaultValue={40}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={70}
          color="secondary"
          style={{width: "300px"}}
        />
        <h2 className="wh2">Typography</h2>
        <Paper elevation={1} style={{ padding: "24px", margin: "8px" }}>
          <h1 className="wh1">Web - Header font 1 Bold</h1>
          <h2 className="wh2">Web - Header font 2 Bold</h2>
          <p className="wd1">Web - Data font 1</p>
          <p className="wd2">Web - Data font 2</p>
          <p className="wd3">Web - Data font 3</p>
          <p className="wd4">Web - Data font 4</p>
          <p className="wdb1">Web - Data font 1 Bold</p>
          <p className="wdb2">Web - Data font 2 Bold</p>
          <p className="wdb3">Web - Data font 3 Bold</p>
          <p className="wdb4">Web - Data font 4 Bold</p>
        </Paper>

        <h2 className="wh2">Button</h2>
        <Paper elevation={1} style={{ padding: "24px", margin: "8px" }}>
          <div>
            <Button variant="contained" color="primary">
              สวัสดี Primary
            </Button>
            <Button variant="contained" color="secondary">
              สวัสดี Secondary
            </Button>
            <Button variant="contained" disabled>
              สวัสดี Disabled
            </Button>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default SystemDesign;
