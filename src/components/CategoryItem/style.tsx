import { makeStyles, Theme } from "@material-ui/core";

export interface StyleProps {
  isActive: boolean;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    maxWidth: "auto",
    margin: theme.spacing(1, 0, 0, 0),
  },
  item: (props: StyleProps) => ({
    backgroundColor: props.isActive
      ? theme.palette.divider
      : theme.palette.background.default,
    border: props.isActive ? `1px solid ${theme.palette.primary.main}` : "",
    borderRadius: 4,
    cursor: "pointer",
  }),
  avatar: {
    backgroundColor: "#C4C4C4",
    color: "#212121",
  },
  avatarHover: {
    backgroundColor: theme.palette.primary.main,
  },
}));
