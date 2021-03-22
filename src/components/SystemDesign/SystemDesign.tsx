import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { useStyles } from "./style";

const SystemDesign = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}>System Design</h1>
    </div>
  );
};

export default SystemDesign;
