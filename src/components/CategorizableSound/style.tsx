import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    position: "relative",
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0, 1, 0),
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.divider,
  },
  avatar: {
    backgroundColor: "#F0F0F0",
    color: "#212121",
  },
  closeIcon: {
    position: "absolute",
    right: "0",
    top: "0",
    textAlign: "end",
    margin: theme.spacing(0, 1, 1, 1),
  },
  btnDelete: {
    border: `2px solid ${theme.palette.primary.main}`,
    padding: "4px",
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      height: "0px",
    },
  },
}));
