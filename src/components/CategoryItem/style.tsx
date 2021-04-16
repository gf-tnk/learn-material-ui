import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "auto",
    margin: theme.spacing(1),
  },
  item: {
    margin: theme.spacing(1, 0, 0, 0),
    backgroundColor: theme.palette.background.default,
    borderRadius: 4,
    cursor: "pointer",
    "&:hover": {
      border: "1px solid " + theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
    },
  },
  avatar: {
    backgroundColor: "#C4C4C4",
    "&:hover": {
      backgroundColor: "#F0F0F0",
    },
  },
}));
