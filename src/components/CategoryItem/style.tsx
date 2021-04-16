import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 260,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  item: {
    margin: theme.spacing(1, 0, 1, 0),
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
