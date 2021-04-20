import React, { useState, useRef } from "react";
import { Box, Avatar, FormControl, Input } from "@material-ui/core";
import { useStyles, StyleProps } from "./style";

interface Props {
  title: string;
  desc?: string;
  isActive: boolean;
  iconIndex?: number;
  type: string;
}

const CategoryItem: React.FC<Props> = (props) => {
  const pastel = useRef<string>(
    "hsl(" +
      360 * Math.random() +
      "," +
      (30 + 70 * Math.random()) +
      "%," +
      (80 + 10 * Math.random()) +
      "%)"
  );
  const [isHover, setIsHover] = useState<boolean>(false);
  const propsStyle: StyleProps = {
    isActive: props.isActive,
    pastelColor: pastel.current,
    type: props.type,
  };

  const classes = useStyles(propsStyle);

  const handlePopoverOpen = () => {
    setIsHover(true);
  };

  const handlePopoverClose = () => {
    setIsHover(false);
  };

  return (
    <>
      <div className={classes.root}>
        <Box
          className={`${classes.item} ${
            props.type === "input"
              ? classes.itemWithInput
              : classes.itemWithoutInput
          }`}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
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
                <span>{props.iconIndex}</span>
              </Avatar>
            </Box>
            <Box p={1}>
              <h4 className="wh4 my-0">{props.title}</h4>
            </Box>
          </Box>
          {props.isActive && props.type === "input" && (
            <Box p={1}>
              <FormControl fullWidth={true}>
                <Input id="my-input" aria-describedby="my-helper-text" className={classes.input}/>
              </FormControl>
            </Box>
          )}
        </Box>
      </div>
    </>
  );
};

export default CategoryItem;
