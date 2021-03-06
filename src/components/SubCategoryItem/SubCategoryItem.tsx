import React, { useContext } from "react";
import { Avatar, FormControl, Input } from "@material-ui/core";
import { useStyles, StyleProps } from "./style";
import { Box } from "../ContainerBox/ContainerBox";
import { ThemeContext } from "../../contexts/theme";
interface Props {
  title: string;
  desc?: string;
  isActive: boolean;
  parentIndex: number;
  childIndex: number;
  type: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputText: string;
  color: string;
}

const SubCategoryItem: React.FC<Props> = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  const propsStyle: StyleProps = {
    isActive: props.isActive,
    pastelColor: props.color,
    type: props.type,
    isDarkMode: isDarkMode
  };
  const classes = useStyles(propsStyle);

  return (
    <>
      <div className={classes.root}>
        <div
          className={`${classes.item} ${
            props.type === "input"
              ? classes.activeInput
              : classes.active
          }`}
        >
          <Box display="flex" alignItems="center" style={{ height: "100%" }}>
            <Box p={1}>
              <Avatar
                alt="Remy Sharp"
                src=""
                className={
                  props.type === "input"
                    ? classes.avatarWithInput
                    : classes.avatarWithoutInput
                }
              >
                <span>{props.childIndex + 1}</span>
              </Avatar>
            </Box>
            <Box p={1}>
              <h4 className="wh4 my-0">{props.title}</h4>
            </Box>
          </Box>
          {props.isActive && props.type === "input" && (
            <Box p={1}>
              <FormControl fullWidth={true}>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  name={props.parentIndex + "," + props.childIndex}
                  className={classes.input}
                  onChange={props.onChangeInput}
                  value={props.inputText}
                />
              </FormControl>
            </Box>
          )}
        </div>
      </div>
    </>
  );
};

export default SubCategoryItem;
