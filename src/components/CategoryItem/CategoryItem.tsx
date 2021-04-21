import React, { useState, useRef } from "react";
import { Box, Avatar } from "@material-ui/core";
import { useStyles, StyleProps } from "./style";

interface Props {
  title: string;
  desc?: string;
  isActive: boolean;
}

const CategoryItem: React.FC<Props> = (props) => {
  const pastel = useRef<string>(
    "hsl(" +
      360 * Math.random() +
      "," +
      (50 + 70 * Math.random()) +
      "%," +
      (85 + 10 * Math.random()) +
      "%)"
  );
  const [isHover, setIsHover] = useState<boolean>(false);
  const propsStyle: StyleProps = {
    isActive: props.isActive,
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
        <div
          className={classes.item}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          // display="flex"
          // alignItems="center"
          style={{ height: "100%" }}
        >
          <div >
            <Avatar
              alt="Remy Sharp"
              src=""
              className={isHover ? classes.avatarHover : classes.avatar}
            >
              {props.title[0]}
            </Avatar>
          </div>
          <div>
            <>
              <h4 className="wh4 my-0">{props.title}</h4>
              {isHover ? <p className="wp3 my-0">{props.desc}</p> : null}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
