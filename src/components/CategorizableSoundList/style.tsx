import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  btnDelete: {
    border: `2px solid ${theme.palette.primary.main}`,
    padding: "4px"
  },
}));
