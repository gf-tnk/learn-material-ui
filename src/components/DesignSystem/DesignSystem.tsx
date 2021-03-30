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
  Link,
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
              <h1 className="wh1">สวัสดี Web - Header 1</h1>
              <h2 className="wh2">สวัสดี Web - Header 2</h2>
              <h2 className="wh3">สวัสดี Web - Header 3</h2>
              <h2 className="wh4">สวัสดี Web - Header 4</h2>
              <h2 className="wh5">สวัสดี Web - Header 5</h2>
              <p className="wp1">สวัสดี Web - Paragraph 1</p>
              <p className="wp2">สวัสดี Web - Paragraph 2</p>
              <p className="wp3">สวัสดี Web - Paragraph 3</p>
              <p className="wp4">สวัสดี Web - Paragraph 4</p>
              <Link className="wa" href="#">
                สวัสดี Web - Link
              </Link>
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
