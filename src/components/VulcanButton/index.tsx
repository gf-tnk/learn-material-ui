import {
  Theme,
  Button,
  withStyles,
} from "@material-ui/core/";

export const VulcanButton = withStyles((theme: Theme) => ({
  root: {
    borderRadius: "50px",
  },
}))(Button);