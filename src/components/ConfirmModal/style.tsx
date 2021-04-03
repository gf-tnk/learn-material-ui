import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px"
  },
  paperModal: {
    position: "relative",
    width: "auto",
    borderRadius: "24px",
    border: "2px solid",
    borderColor: theme.palette.secondary.main,
  },
  closeIcon: {
    position: "absolute",
    right: "0",
    textAlign: "end",
  },
  mascotImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    height: "auto",
    maxWidth: "170px",
  },
}));
