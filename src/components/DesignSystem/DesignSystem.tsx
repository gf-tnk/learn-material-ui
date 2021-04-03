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
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { ThemeContext } from "../../contexts/theme";
import { useStyles } from "./style";
import { setFontScale, setBtnScale } from "../../plugins/setScaleElement";

import sttIcon from "../../assets/images/stt-app.svg";
import { ReactComponent as VulcanLogo } from "../../assets/images/vulcan-logo.svg";
import helloMascot from "../../assets/images/hello-mascot.svg"

import ConfirmModal from "../ConfirmModal/ConfirmModal";

import AppLogo from "../AppLogo/AppLogo";
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
        <h2 className="wh2">Logo</h2>
        <VulcanLogo fill={isDarkMode ? "white" : "black"} />
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

        <h2 className="wh2">Input text</h2>
        {/* can pass props fullWidth for full width of input element or form control element */}
        <Box display="flex">
          <Box>
            <FormControl>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                value="Hello"
              />
            </FormControl>
          </Box>
          <Box ml={2}>
            <FormControl>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                disabled={true}
                value="Hello"
              />
            </FormControl>
          </Box>
        </Box>

        <Grid container>
          <Grid item md={6}>
            <h2 className="wh2">Typography</h2>
            <Paper elevation={1} className={classes.paper}>
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
            <Paper elevation={1} className={classes.paper}>
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
            <Paper elevation={1} className={classes.paper}>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpen}
                >
                  Open
                </Button>
                <ConfirmModal
                  isOpen={isOpen}
                  title={"My title"}
                  desc={"My desc"}
                  handleClose={handleClose}
                  mascot={helloMascot}
                >
                  <Button color="primary" variant="contained" onClick={handleClose}>
                    ยืนยัน
                  </Button>
                </ConfirmModal>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item md={6}>
            <h2 className="wh2">Nav Icon</h2>
            <Grid container>
              <Grid
                container
                item
                md={12}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item md={3}>
                  <AppLogo
                    logo={sttIcon}
                    title="ถอดคำ"
                    path="/test"
                    size="sm"
                  />
                </Grid>
                <Grid item md={3}>
                  <AppLogo
                    logo={sttIcon}
                    title="ถอดคำ"
                    path="/test"
                    size="sm"
                  />
                </Grid>
                <Grid item md={3}>
                  <AppLogo
                    logo={sttIcon}
                    title="ถอดคำ"
                    path="/test"
                    size="sm"
                  />
                </Grid>
                <Grid item md={3}>
                  <AppLogo
                    logo={sttIcon}
                    title="ถอดคำ"
                    path="/test"
                    size="sm"
                  />
                </Grid>
              </Grid>
              <Grid item md={6}></Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <h2 className="wh2">App header icon</h2>
            <Grid container>
              <Grid container item md={12} justify="center" alignItems="center">
                <Grid item>
                  <AppLogo
                    logo={sttIcon}
                    title="ถอดคำ"
                    path="/test"
                    size="md"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <h2 className="wh2">App Icon</h2>
          <Grid
            container
            item
            md={12}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={3}>
              <AppLogo logo={sttIcon} title="ถอดคำ" path="/test" size="lg" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <AppLogo logo={sttIcon} title="ถอดคำ" path="/test" size="lg" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <AppLogo logo={sttIcon} title="ถอดคำ" path="/test" size="lg" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <AppLogo logo={sttIcon} title="ถอดคำ" path="/test" size="lg" />
            </Grid>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SystemDesign;
