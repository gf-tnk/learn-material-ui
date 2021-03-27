import React, { useContext, useEffect, useState } from "react";
import {
  Switch,
  Button,
  Paper,
  Slider,
  Container,
  Grid,
  Modal,
  Box,
} from "@material-ui/core";
import { ThemeContext } from "../../contexts/theme";
import { useStyles } from "./style";
import { setFontScale, setBtnScale } from "../../plugins/setScaleElement";

const SystemDesign = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const valuetext = (value: number) => `${value}px`;

  const handleFontSize = (event: object, value: number | number[]) => {
    setFontScale(value + "px");
  };

  const handleBtsSize = (event: object, value: number | number[]) => {
    setBtnScale(value + "px");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Container>
        <h1 className="wh1">Design Systems</h1>
        <h2 className="wh2">Theme</h2>
        <Switch checked={isDarkMode} onChange={handleThemeChange} />
        <Grid container>
          <Grid item md={6}>
            <h2 className="wh2">Font Size</h2>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={2}
              marks
              min={-8}
              max={8}
              color="secondary"
              style={{ width: "300px" }}
              onChange={handleFontSize}
            />
          </Grid>
          <Grid item md={6}>
            <h2 className="wh2">Button Size</h2>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={2}
              marks
              min={-8}
              max={8}
              color="secondary"
              style={{ width: "300px" }}
              onChange={handleBtsSize}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item md={6}>
            <h2 className="wh2">Typography</h2>
            <Paper elevation={1} style={{ padding: "24px", margin: "8px" }}>
              <h1 className="wh1">สวัสดี Web - Header font 1 Bold</h1>
              <h2 className="wh2">สวัสดี Web - Header font 2 Bold</h2>
              <p className="wd1">สวัสดี Web - Data font 1</p>
              <p className="wd2">สวัสดี Web - Data font 2</p>
              <p className="wd3">สวัสดี Web - Data font 3</p>
              <p className="wd4">สวัสดี Web - Data font 4</p>
              <p className="wdb1">สวัสดี Web - Data font 1 Bold</p>
              <p className="wdb2">สวัสดี Web - Data font 2 Bold</p>
              <p className="wdb3">สวัสดี Web - Data font 3 Bold</p>
              <p className="wdb4">สวัสดี Web - Data font 4 Bold</p>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <h2 className="wh2">Button</h2>
            <Paper elevation={1} style={{ padding: "24px", margin: "8px" }}>
              <div className={classes.btn}>
                <Button variant="contained" color="primary">
                  สวัสดี Primary
                </Button>
                <Button variant="contained" color="secondary">
                  สวัสดี Secondary
                </Button>
                <Button variant="contained" disabled>
                  สวัสดี Disabled
                </Button>
                <Button className="green-btn" variant="contained">
                  สวัสดี Primary
                </Button>
                <Button variant="outlined" color="primary">
                  สวัสดี Primary
                </Button>
                <Button variant="outlined" disabled>
                  สวัสดี Disabled
                </Button>
              </div>
            </Paper>
            <h2 className="wh2">Dialog</h2>
            <Paper elevation={1} style={{ padding: "24px", margin: "8px" }}>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpen}
                >
                  Open
                </Button>
                <Modal
                  open={isOpen}
                  onClose={handleClose}
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  className={classes.modal}
                  container={() =>
                    document.querySelector("#root") as HTMLElement
                  }
                >
                  <Paper className={classes.paper}>
                    <Box justifyContent="center" display="flex">
                      <Box p={4} textAlign="center">
                        <h2 className="wh2">My Title</h2>
                        <p className="wd2">My Description</p>
                        <Button variant="outlined" onClick={handleClose}>
                          สวัสดี Primary
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
                </Modal>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SystemDesign;
