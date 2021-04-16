import React, { useState } from "react";
import { Grid, Paper, Grow, Avatar, Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CategoryItem from "../CategoryItem/CategoryItem";
import { useStyles } from "./style";
interface Props {
  category: any[];
}

interface Cat {
  name: string;
  desc: string;
}

const CategorizableSound: React.FC<Props> = (props) => {
  const DEFAULT_SELECTED = -1;
  const DEFAULT_CAT = {
    name: "",
    desc: "",
  };
  const classes = useStyles();
  const [catIndex, setCatIndex] = useState<number>(DEFAULT_SELECTED);
  const [category, setCategory] = useState<Cat>(DEFAULT_CAT);
  const [subCat, setSubCat] = useState<any[]>([]);
  const [subCatIndex, setSubCatIndex] = useState<number>(DEFAULT_SELECTED);
  const [subCategory, setSubCategory] = useState<string>("");
  const [subSubCat, setSubSubCat] = useState<any[]>([]);
  const [showSubCat, setShowSubCat] = useState<boolean>(false);

  const onClickCategory = (index: number) => {
    const cat = {
      name: props.category[index].name,
      desc: props.category[index].desc,
    };
    setCatIndex(index);
    setSubCatIndex(DEFAULT_SELECTED);
    setCategory(cat);
    setSubCat(props.category[index].children);
    setShowSubCat(true);
  };

  const onClickSubCategory = (index: number) => {
    setSubCatIndex(index);
    setSubCategory(subCat[index].name);
    setSubSubCat(props.category[index].children);
  };

  const onCloseSubCat = () => {
    setShowSubCat(false);
    setSubCat([]);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={showSubCat ? 6 : 12}>
          {props.category.map((item: any, index: number) => (
            <div onClick={() => onClickCategory(index)}>
              <CategoryItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                hoverable={true}
                isActive={catIndex === index ? true : false}
              />
            </div>
          ))}
        </Grid>
        {subCat?.length > 0 && (
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
                      {category.name[0]}
                    </Avatar>
                  </Box>
                  <Box p={1}>
                    <div>
                      <span className="wh4">{category.name}</span>
                    </div>
                    <span className="wp3">{category.desc}</span>
                  </Box>
                </Box>
                <Grid container spacing={2}>
                  {subCat.map((item: any, index: number) => (
                    <Grid item xs={6}>
                      <div onClick={() => onClickSubCategory(index)}>
                        <CategoryItem
                          key={item.id}
                          title={item.name}
                          desc={item.desc}
                          hoverable={false}
                          isActive={subCatIndex === index ? true : false}
                        />
                      </div>
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
