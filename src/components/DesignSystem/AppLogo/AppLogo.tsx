import React from "react";
import { Link, Box } from "@material-ui/core";

import { useStyles } from "./style";

interface Props {
  logo: string;
  title: string;
  path: string
}

const AppLogo: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Link underline="none" href={props.path}>
        <Box display="flex" justifyContent="center">
          <Box textAlign="center">
            <img src={props.logo} alt="เฟอร์นิเจอร์" className={classes.appLogo}/>
            <h2 className="wh2">{props.title}</h2>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default AppLogo;
