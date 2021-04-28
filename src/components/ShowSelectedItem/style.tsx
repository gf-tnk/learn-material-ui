import { makeStyles, Theme } from "@material-ui/core";
export interface PropsStyle {
  isDarkMode: boolean | undefined;
}
export const useStyles = makeStyles<Theme, PropsStyle>((theme: Theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(0,2)
  },
  cat: {
    backgroundColor: "grey"
  },
  subCatWithOutInput: {
    backgroundColor: "#C3CEF4"
  },
  subCatWithInput: {
    backgroundColor: "#F1E399"
  },
}));
