import { makeStyles, Theme } from "@material-ui/core";
export interface StyleProps {
  isActive: boolean;
  pastelColor: string;
  type: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    maxWidth: "auto",
    // margin: theme.spacing(1, 0, 0, 0),
  },
  item: (props: StyleProps) => ({
    borderRadius: 4,
    cursor: "pointer",
    color: props.isActive ? "#212121" : theme.palette.text.primary,
  }),
  itemWithoutInput: (props: StyleProps) => ({
    backgroundColor: props.isActive
      ? "#C3CEF4"
      : theme.palette.background.default,
  }),
  itemWithInput: (props: StyleProps) => ({
    backgroundColor: props.isActive
      ? "#F1E399"
      : theme.palette.background.default,
  }),
  avatarWithInput: (props: StyleProps) => ({
    backgroundColor: props.isActive
      ? "#FFFFFF"
      : props.pastelColor,
    color: "#212121",
  }),
  avatarWithoutInput: (props: StyleProps) => ({
    backgroundColor: props.isActive
      ? theme.palette.background.default
      : props.pastelColor,
    color: props.isActive ? theme.palette.text.primary : "#212121",
  }),
  input: {
    backgroundColor: "#FFFFFF"
  }
}));
