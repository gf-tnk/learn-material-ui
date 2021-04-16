import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    position: "relative",
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0, 1, 0),
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.secondary.main,
  },
  avatar: {
    backgroundColor: "#F0F0F0",
  },
  closeIcon: {
    position: "absolute",
    right: "0",
    top: "0",
    textAlign: "end",
    margin: theme.spacing(0, 1, 1, 1),
  },
}));
