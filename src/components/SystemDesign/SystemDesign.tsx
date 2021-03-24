import React, { useContext, useEffect } from "react";
import { Switch, Button, Typography, Paper, Slider } from "@material-ui/core";
import { ThemeContext } from "../../contexts/theme";

const SystemDesign = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const valuetext = (value: number) => `${value}°C`

  return (
    <div>
      <Typography id="discrete-slider" gutterBottom>
        Theme
      </Typography>
      <Switch checked={isDarkMode} onChange={handleThemeChange} />
      <Typography id="discrete-slider" gutterBottom>
        Font size
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <Typography variant="h3" component="h3">
        Hello Vulcan Dark Theme
      </Typography>
      <p>
        Vulcan ร่วมมือกับผู้พิการทางสายตาในการประมวลเสียงและข้อความ
        เพื่อพัฒนาระบบดิจิตอลในการประมวลผลคำพูดภาษาไทย
      </p>
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
    </div>
  );
};

export default SystemDesign;
