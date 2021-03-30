import { makeStyles, Theme } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";
export interface StyleProps {
  size: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  appLogo: (props) => ({
    maxWidth:
      props.size == "lg"
        ? "calc(10em + (var(--btn-scale))*2)"
        : props.size == "md"
        ? "calc(5em + (var(--btn-scale))*2)"
        : "calc(3em + (var(--btn-scale))*2)",
    [theme.breakpoints.down("sm")]: {
      maxWidth:
        props.size == "lg"
          ? "calc(8em + (var(--btn-scale))*2)"
          : props.size == "md"
          ? "calc(3em + (var(--btn-scale))*2)"
          : "calc(1em + (var(--btn-scale))*2)",
    },
  }),
  noMarginTop: {
    marginTop: 0,
  },
}));
