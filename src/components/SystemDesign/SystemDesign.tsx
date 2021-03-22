import React, { useContext, useEffect } from "react";
import { Switch, Button, Typography, Paper } from "@material-ui/core";
import { ThemeContext } from "../../contexts/theme";
import { VulcanButton } from "../VulcanButton";
const SystemDesign = () => {
  const { viewMode, setViewMode } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setViewMode(!viewMode);
  };

  useEffect(() => {
    console.log(viewMode);
  }, [viewMode]);

  return (
    <div>
      <Switch checked={viewMode} onChange={handleThemeChange} />
      <Typography variant="h1" component="h2">
        Hello Vulcan Dark Theme
      </Typography>
      <Paper elevation={0} style={{ padding: "24px", margin: "8px" }}>
        <div>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default SystemDesign;
