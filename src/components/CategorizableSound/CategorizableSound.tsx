import React, { useEffect, useState } from "react";
import { Grid, Paper, Grow, Avatar, Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CategoryItem from "../CategoryItem/CategoryItem";
import SubCategoryItem from "../SubCategoryItem/SubCategoryItem";

import { useStyles } from "./style";
interface Props {
  items: any[];
}

interface Cat {
  name: string;
  desc: string;
}

const CategorizableSound: React.FC<Props> = (props) => {
  const DEFAULT_SELECTED = [""];
  const DEFAULT_CAT_SELECTED = {
    name: "",
    desc: "",
  };
  const classes = useStyles();
  const [catSelected, setCatSelected] = useState<Cat>(DEFAULT_CAT_SELECTED);
  const [subCatSelected, setSubCatSelected] = useState<any[]>(
    DEFAULT_SELECTED
  );
  const [subSubCatSelected, setSubSubCatSelected] = useState<string[]>(
    DEFAULT_SELECTED
  );
  const [subCatItems, setSubCatItems] = useState<any[]>([]);
  const [showSubCat, setShowSubCat] = useState<boolean>(false);

  const onClickCategory = (index: number) => {
    setCatSelected(props.items[index]);
    setSubCatItems(props.items[index].children);
    setShowSubCat(true);
  };

  const onCloseSubCat = () => {
    setShowSubCat(false);
    setSubCatItems([]);
  };

  const onClickSubSubCategory = (subCatID: number, subSubCatID: number) => {
    setSubCatSelected([]);
    setSubSubCatSelected([]);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={showSubCat ? 6 : 12}>
          {props.items.map((item: any, index: number) => (
            <div onClick={() => onClickCategory(index)}>
              <CategoryItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                isActive={catSelected.name === item.name ? true : false}
              />
            </div>
          ))}
        </Grid>
        {subCatItems?.length > 0 && (
          <Grid item xs={showSubCat ? 6 : 12}>
            <Grow in={showSubCat}>
              <Paper className={classes.paper}>
                <IconButton
                  className={classes.closeIcon}
                  aria-label="ยกเลิก"
                  onClick={onCloseSubCat}
                >
                  <CloseIcon />
                </IconButton>
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ height: "100%" }}
                >
                  <Box p={1}>
                    <Avatar alt="Remy Sharp" src="" className={classes.avatar}>
                      {catSelected.name[0]}
                    </Avatar>
                  </Box>
                  <Box p={1}>
                    <h4 className="wh4 my-0">{catSelected.name}</h4>
                    <p className="wp3 my-0">{catSelected.desc}</p>
                  </Box>
                </Box>
                <Grid container spacing={2}>
                  {subCatItems?.map((subCat: any, i: number) => (
                    <Grid item xs={6}>
                      <h5 className="wh5 my-0">{subCat.name}</h5>
                      {subCat.children?.map((subSubCat: any, j: number) => (
                        <div
                          onClick={() =>
                            onClickSubSubCategory(subCat.id, subSubCat.id)
                          }
                        >
                          <SubCategoryItem
                            key={subSubCat.id}
                            title={subSubCat.name}
                            desc={subSubCat.desc}
                            isActive={
                              subSubCatSelected === subSubCat.name
                                ? true
                                : false
                            }
                            iconIndex={j + 1}
                          />
                        </div>
                      ))}
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grow>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default CategorizableSound;
