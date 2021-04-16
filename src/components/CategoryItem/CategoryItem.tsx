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
  hoverable: boolean;
}

const CategoryItem: React.FC<Props> = (props) => {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const classes = useStyles();

  const handlePopoverOpen = (index: number) => {
    setHoverIndex(index);
  };

  const handlePopoverClose = () => {
    setHoverIndex(-1);
  };


  return (
    <>
      <div className={classes.root}>
        <List dense={true}>
          {["A", "B", "C"].map((item, index) => (
            <ListItem
              key={index}
              className={classes.item}
              onMouseEnter={() => handlePopoverOpen(index)}
              onMouseLeave={handlePopoverClose}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src=""
                  className={hoverIndex === index ? classes.avatar : undefined}
                >
                  {item}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<span className="wh4">Speech {index}</span>}
                secondary={
                  hoverIndex === index ? (
                    <span className="wp3">เสียงพูด</span>
                  ) : null
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default CategoryItem;
