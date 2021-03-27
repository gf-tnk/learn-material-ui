import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.primary.main,
  },
  btn: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "relative",
    minWidth: 480,
    borderRadius: "24px",
    border: "2px solid",
    borderColor: theme.palette.secondary.main,
  }
}));
