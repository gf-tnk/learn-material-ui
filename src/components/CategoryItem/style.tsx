import { makeStyles, Theme } from "@material-ui/core";

export interface StyleProps {
  isActive: boolean;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    maxWidth: "auto",
    margin: theme.spacing(1, 0, 1, 0),
  },
  item: (props) => ({
    margin: theme.spacing(1, 0, 0, 0),
    backgroundColor: props.isActive
      ? theme.palette.secondary.main
      : theme.palette.background.default,
    border: props.isActive ? `1px solid ${theme.palette.primary.main}`: "",
    borderRadius: 4,
    cursor: "pointer",
    "&:hover": {
      border: "1px solid " + theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
    },
  }),
  avatar: {
    backgroundColor: "#C4C4C4",
  },
  avatarActive: {
    backgroundColor: "#F0F0F0",
  },
}));
