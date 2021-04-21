import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { useStyles, StyleProps } from "./style";
import { Box } from "../ContainerBox/ContainerBox";

interface Props {
  title: string;
  desc?: string;
  isActive: boolean;
}

const CategoryItem: React.FC<Props> = (props) => {
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
        <Box
          className={classes.item}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          display="flex"
          alignItems="center"
          style={{ height: "100%" }}
          p={1}
        >
          <Box px={1}>
            <Avatar
              alt="Remy Sharp"
              src=""
              className={isHover ? classes.avatarHover : classes.avatar}
            >
              {props.title[0]}
            </Avatar>
          </Box>
          <Box px={1}>
            <>
              <h4 className="wh4 my-0">{props.title}</h4>
              {isHover ? <p className="wp3 my-0">{props.desc}</p> : null}
            </>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default CategoryItem;
