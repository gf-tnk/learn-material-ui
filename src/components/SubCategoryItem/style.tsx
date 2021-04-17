import { makeStyles, Theme } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";

export interface StyleProps {
  isActive: boolean;
  pastelColor: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    maxWidth: "auto",
    margin: theme.spacing(1, 0, 0, 0),
  },
  item: (props: StyleProps) => ({
    backgroundColor: props.isActive
      ? "#C3CEF4"
      : theme.palette.background.default,
    border: props.isActive ? `1px solid ${theme.palette.primary.main}` : "",
    borderRadius: 4,
    cursor: "pointer",
    color: props.isActive ? "rgba(0, 0, 0, 0.87)" : theme.palette.text.primary
  }),
  avatar: (props: StyleProps) => ({
    backgroundColor: props.pastelColor,
  }),
  avatarHover: {
    backgroundColor: theme.palette.primary.main,
  },
}));
