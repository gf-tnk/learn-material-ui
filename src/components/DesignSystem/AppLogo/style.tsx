import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  appLogo: {
    maxWidth: "calc(80% + (var(--btn-scale))*2)",
    [theme.breakpoints.down('sm')]: {
      maxWidth: "calc(60% + (var(--btn-scale))*2)",
    },
  }
}));
