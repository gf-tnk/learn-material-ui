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
  const DEFAULT_CAT_SELECTED = {
    name: "",
    desc: "",
  };
  const classes = useStyles();
  const [catSelected, setCatSelected] = useState<Cat>(DEFAULT_CAT_SELECTED);
  const [subCatSelected, setSubCatSelected] = useState<any>([]);
  const [subCatItems, setSubCatItems] = useState<any[]>([]);
  const [showSubCat, setShowSubCat] = useState<boolean>(false);

  const onClickCategory = (index: number) => {
    setCatSelected(props.items[index]);
    setSubCatItems(props.items[index].children);
    setShowSubCat(true);
    const subCat = new Array(props.items[index].children.length);
    setSubCatSelected(subCat);
  };

  const onCloseSubCat = () => {
    setShowSubCat(false);
    setSubCatItems([]);
  };

  const onClickSubSubCategory = (
    subCatIndex: number,
    subSubCatIndex: number
  ) => {
    const subCat = [...subCatSelected];
    subCat[subCatIndex] = {
      subCat: subCatItems[subCatIndex].name,
      subSubCat: subCatItems[subCatIndex].children
        ? subCatItems[subCatIndex].children[subSubCatIndex].name
        : "",
    };
    setSubCatSelected(subCat);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={showSubCat ? 6 : 12}>
          {props.items.map((item: any, index: number) => (
            <div onClick={() => onClickCategory(index)} key={item.id}>
              <CategoryItem
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
                <div
                  // display="flex"
                  // alignItems="center"
                  style={{ height: "100%" }}
                >
                  <div>
                    <Avatar alt="Remy Sharp" src="" className={classes.avatar}>
                      {catSelected.name[0]}
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="wh4 my-0">{catSelected.name}</h4>
                    <p className="wp3 my-0">{catSelected.desc}</p>
                  </div>
                </div>
                <Grid container spacing={2}>
                  {subCatItems?.map((subCat: any, i: number) => (
                    <Grid item xs={6} key={subCat.id}>
                      <h5 className="wh5 my-0">{subCat.name}</h5>
                      {subCat.children?.map((subSubCat: any, j: number) => (
                        <div onClick={() => onClickSubSubCategory(i, j)} key={subSubCat.id}>
                          <SubCategoryItem
                            key={subSubCat.id}
                            title={subSubCat.name}
                            desc={subSubCat.desc}
                            isActive={
                              subCatSelected[i]?.subSubCat === subSubCat.name 
                                ? true
                                : false
                            }
                            iconIndex={j + 1}
                            type={subCat.type}
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
