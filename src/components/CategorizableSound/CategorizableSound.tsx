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
  children: any[];
}

const CategorizableSound: React.FC<Props> = (props) => {
  const DEFAULT_SELECTED = -1;
  const DEFAULT_CAT = {
    name: "",
    desc: "",
    children: [],
  };
  const classes = useStyles();
  const [catIndex, setCatIndex] = useState<number>(DEFAULT_SELECTED);
  const [category, setCategory] = useState<Cat>(DEFAULT_CAT);
  const [subCat, setSubCat] = useState<any[]>([]);
  const [subSubCatIndex, setSubSubCatIndex] = useState<string>(
    DEFAULT_SELECTED.toString()
  );
  const [showSubCat, setShowSubCat] = useState<boolean>(false);

  const onClickCategory = (index: number) => {
    const cat = {
      name: props.category[index].name,
      desc: props.category[index].desc,
      children: props.category[index].children,
    };
    setCatIndex(index);
    setSubSubCatIndex(DEFAULT_SELECTED.toString());
    setCategory(cat);
    setSubCat(props.category[index].children);
    setShowSubCat(true);
  };

  const onCloseSubCat = () => {
    setShowSubCat(false);
    setSubCat([]);
  };

  const onClickSubSubCategory = (index: string) => {
    setSubSubCatIndex(index);
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
              {item.ch}
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
                    <h4 className="wh4 my-0">{category.name}</h4>
                    <p className="wp3 my-0">{category.desc}</p>
                  </Box>
                </Box>
                <Grid container spacing={2}>
                  {subCat?.map((item: any, i: number) => (
                    <Grid item xs={6}>
                      <h5 className="wh5 my-0">{item.name}</h5>
                      {item.children?.map((item: any, j: number) => (
                        <div onClick={() => onClickSubSubCategory(i + "" + j)}>
                          <CategoryItem
                            key={item.id}
                            title={item.name}
                            desc={item.desc}
                            hoverable={false}
                            isActive={
                              subSubCatIndex === i + "" + j ? true : false
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
