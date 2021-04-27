import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  IconButton,
  Modal,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CategoryItem from "../CategoryItem/CategoryItem";
import SubCategoryItem from "../SubCategoryItem/SubCategoryItem";
import { Box } from "../ContainerBox/ContainerBox";
import { useStyles } from "./style";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import mascot from "../../assets/images/hello-mascot.svg";
interface Props {
  items: any[];
  index: number;
  onEdit: (index: number, selected: any) => void;
}

const CategorizableSound: React.FC<Props> = (props) => {
  const DEFAULT_SELECTED = {
    category: "",
    subCat: [],
  };
  const classes = useStyles();
  const [catSelected, setCatSelected] = useState<any>();
  const [showSubCat, setShowSubCat] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>(DEFAULT_SELECTED);
  const [isWaring, setIsWarning] = useState<boolean>(false);
  const [warningContent, setWarningContent] = useState<string>("");

  const onClickCategory = (index: number) => {
    setCatSelected(props.items[index]);
    setShowSubCat(true);
    const clone = { ...selected };
    let subCat;
    if (props.items[index].name !== catSelected?.name) {
      subCat = new Array(props.items[index].children.length);
    } else {
      subCat = selected.subCat;
    }
    clone.category = props.items[index].name;
    clone.subCat = subCat;
    setSelected(clone);
  };

  const onCloseSubCat = () => {
    setShowSubCat(false);
  };

  const onClickSubSubCategory = (
    subCatIndex: number,
    subSubCatIndex: number
  ) => {
    const clone = { ...selected };
    clone.subCat[subCatIndex] = {
      name: catSelected.children[subCatIndex].name,
      children: {
        name: catSelected.children[subCatIndex].children
          ? catSelected.children[subCatIndex].children[subSubCatIndex].name
          : "",
        input: null,
      },
    };
    setSelected(clone);
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const subCatIndex = event.target.name.split(",")[0];
    const subSubCatIndex = event.target.name.split(",")[1];
    const clone = { ...selected };
    clone.subCat[subCatIndex] = {
      name: catSelected.children[subCatIndex].name,
      children: {
        name: catSelected.children[subCatIndex].children
          ? catSelected.children[subCatIndex].children[subSubCatIndex].name
          : "",
        input: event.target.value,
      },
    };
    setSelected(clone);
  };

  const onClickBackdrop = () => {
    const unselected = getUnselected(selected);
    if (unselected.length > 0) {
      setIsWarning(true);
      setWarningContent(unselected.toString().replace(",", ", "));
    } else {
      setShowSubCat(false)
    }
  };

  const getUnselected = (selected: any) => {
    let unselected = [];
    for (let i = 0; i < selected.subCat.length; i++) {
      if (!selected.subCat[i]) {
        unselected.push(catSelected.children[i]?.name);
      }
    }
    return unselected;
  };

  const handleCloseModal = () => {
    setIsWarning(false);
  };

  useEffect(() => {
    props.onEdit(props.index, selected);
  }, [selected]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={showSubCat ? 6 : 12} xs={12}>
          {props.items.map((item: any, index: number) => (
            <div onClick={() => onClickCategory(index)} key={item.id}>
              <CategoryItem
                title={item.name}
                desc={item.desc}
                isActive={catSelected?.name === item.name ? true : false}
              />
            </div>
          ))}
        </Grid>
        {catSelected?.children?.length > 0 && showSubCat && (
          <Grid item md={showSubCat ? 6 : 12} xs={12} id="sub-cat-container">
            <Modal
              open={showSubCat}
              onClose={onCloseSubCat}
              aria-labelledby="subCat-modal-title"
              aria-describedby="subCat-modal-description"
              container={() =>
                document.querySelector("#sub-cat-container") as HTMLElement
              }
              style={{ position: "relative" }}
              onBackdropClick={onClickBackdrop}
              disableBackdropClick={true}
            >
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
                  mb={1}
                >
                  <Box p={1}>
                    <Avatar alt="Remy Sharp" src="" className={classes.avatar}>
                      {catSelected.name[0]}
                    </Avatar>
                  </Box>
                  <Box p={1}>
                    <h4 className="wh4 my-0">{catSelected?.name}</h4>
                    <p className="wp3 my-0">{catSelected?.desc}</p>
                  </Box>
                </Box>
                <Grid container spacing={2}>
                  {catSelected.children?.map((subCat: any, i: number) => (
                    <Grid item xs={12} key={subCat.id}>
                      <h5 className="wh5 my-0">{subCat.name}</h5>
                      <Grid container spacing={1}>
                        {subCat.children?.map((subSubCat: any, j: number) => (
                          <Grid item xs={12} md={6}>
                            <div
                              onClick={() => onClickSubSubCategory(i, j)}
                              key={subSubCat.id}
                            >
                              <SubCategoryItem
                                key={subSubCat.id}
                                title={subSubCat.name}
                                desc={subSubCat.desc}
                                isActive={
                                  selected.subCat[i]?.children.name ===
                                  subSubCat.name
                                    ? true
                                    : false
                                }
                                parentIndex={i}
                                childIndex={j}
                                type={subCat.type}
                                onChangeInput={onChangeInput}
                                inputText={selected.subCat[i]?.children.input}
                              />
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Modal>
          </Grid>
        )}
      </Grid>
      <ConfirmModal
        isOpen={isWaring}
        desc={`ระบุ ${warningContent} ด้วยครับ`}
        handleClose={handleCloseModal}
        mascot={mascot}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={handleCloseModal}
          fullWidth={true}
        >
          ตกลง
        </Button>
      </ConfirmModal>
    </>
  );
};

export default CategorizableSound;
