import { Grid, Box, Avatar, Input } from "@material-ui/core";
import React, { useContext } from "react";
import { useStyles, PropsStyle } from "./style";
import { ThemeContext } from "../../contexts/theme";

interface Props {
  selected: any;
}

const ShowSelectedItem: React.FC<Props> = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  const classes = useStyles({ isDarkMode });
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={props.selected.subCat.length === 0 ? 12 : 6}
          className={classes.cat}
        >
          <Box
            display="flex"
            alignItems="center"
            style={{ height: "100%" }}
            mb={1}
          >
            <Box p={1}>
              <Avatar alt="Remy Sharp" src="" className={classes.avatar}>
                {props.selected.category[0]}
              </Avatar>
            </Box>
            <Box p={1}>
              <h4 className="wh4 my-0">{props.selected.category}</h4>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.cat}>
          <Grid container>
            {props.selected.subCat?.map((sub: any, i: number) => (
              <Grid
                item
                xs={12}
                key={i}
                className={
                  sub.children.input !== null
                    ? classes.subCatWithInput
                    : classes.subCatWithOutInput
                }
              >
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ height: "100%" }}
                  mb={1}
                >
                  <Box p={1}>
                    <Avatar alt="Remy Sharp" src="" className={classes.avatar}>
                      {sub.name[0]}
                    </Avatar>
                  </Box>
                  <Box p={1}>
                    <Box display="flex">
                      <Box>
                        <h4 className="wh4 my-0">{sub.name}</h4>
                        <p className="wp4 my-0">{sub.children.name}</p>
                      </Box>
                      {sub.children.input !== null && (
                        <Box mx={2}>
                          <Input
                            id="my-input"
                            aria-describedby="my-helper-text"
                            // className={classes.input}
                            value={sub.children.input}
                            disabled={true}
                          />
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowSelectedItem;
