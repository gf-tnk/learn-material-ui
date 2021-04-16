import React, { useState } from "react";
import {
  Box,
  Popover,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { useStyles } from "./style";

interface Props {
  title: string;
  desc: string;
  icon?: string;
  hoverable?: boolean;
}

const CategoryItem: React.FC<Props> = (props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const classes = useStyles();

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
              className={isHover ? classes.avatar : undefined}
            >
              A
            </Avatar>
          </Box>
          <Box>
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
