import React, { useState } from "react";
import {
  Box,
  Avatar,
} from "@material-ui/core";
import { useStyles, StyleProps } from "./style";

interface Props {
  title: string;
  desc: string;
  icon?: string;
  hoverable?: boolean;
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
        >
          <Box p={1}>
            <Avatar
              alt="Remy Sharp"
              src=""
              className={isHover ? classes.avatarActive : classes.avatar}
            >
              {props.title[0]}
            </Avatar>
          </Box>
          <Box p={1}>
            {props.hoverable ? (
              <>
                <div>
                  <span className="wh4">{props.title}</span>
                </div>
                {isHover ? <span className="wp3">{props.desc}</span> : null}
              </>
            ) : (
              <span className="wh4">{props.title}</span>
            )}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default CategoryItem;
