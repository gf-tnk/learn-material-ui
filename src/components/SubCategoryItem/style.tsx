import { makeStyles, Theme } from "@material-ui/core";
export interface StyleProps {
  isActive: boolean;
  pastelColor: string;
  type: string;
  isDarkMode: boolean | undefined;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    maxWidth: "auto",
  },
  item: (props: StyleProps) => ({
    borderRadius: 4,
    cursor: "pointer",
    color: props.isActive ? "#212121" : theme.palette.text.primary,
    backgroundColor: props.isDarkMode ? "#212121" : "#F0F0F0",
  }),
  active: (props: StyleProps) => ({
    backgroundColor: props.isActive ? "#C3CEF4" : "",
  }),
  activeInput: (props: StyleProps) => ({
    backgroundColor: props.isActive ? "#F1E399" : "",
  }),
  avatarWithInput: (props: StyleProps) => ({
    backgroundColor: props.isActive ? "#FFFFFF" : props.pastelColor,
    color: "#212121",
  }),
  avatarWithoutInput: (props: StyleProps) => ({
    backgroundColor: props.isActive
      ? theme.palette.background.default
      : props.pastelColor,
    color: props.isActive ? theme.palette.text.primary : "#212121",
  }),
  input: {
    backgroundColor: "#FFFFFF",
    color: "#434343"
  },
}));
