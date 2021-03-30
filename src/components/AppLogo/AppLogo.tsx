import React from "react";
import { Link, Box } from "@material-ui/core";

import { useStyles, StyleProps } from "./style";

interface Props {
  logo: string;
  title: string;
  path: string;
  size: string;
}

const AppLogo: React.FC<Props> = (props) => {
  const propsStyle: StyleProps = {
    size: props.size,
  };
  const classes = useStyles(propsStyle);

  if (props.size === "md") {
    return (
      <>
        <Link underline="none" href={props.path}>
          <Box display="flex" justifyContent="center">
            <Box textAlign="end">
              <img
                src={props.logo}
                alt="เฟอร์นิเจอร์"
                className={classes.appLogo}
              />
            </Box>
            <Box ml={2}>
              <h2 className="wh1">{props.title}</h2>
            </Box>
          </Box>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link underline="none" href={props.path}>
          <Box display="flex" justifyContent="center">
            <Box textAlign="center">
              <img
                src={props.logo}
                alt="เฟอร์นิเจอร์"
                className={classes.appLogo}
              />
              <h2
                className={
                  props.size === "lg" ? "wh1" : "wh3 " + classes.noMarginTop
                }
              >
                {props.title}
              </h2>
            </Box>
          </Box>
        </Link>
      </>
    );
  }
};

export default AppLogo;
