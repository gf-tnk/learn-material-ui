import { Button, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import CategorizableSoundList from "../CategorizableSoundList/CategorizableSoundList";
import { Box } from "../ContainerBox/ContainerBox";

const CategorizableBox = () => {
  const classes = useStyles();
  const DEFAULT_MARK = {
    category: "",
    subCat: [],
  };

  // const x = {
  //   category: "",
  //   subCat: {
  //     name: "",
  //     input: null,
  //   },
  //   subSubCat: {
  //     name: "",
  //     input: null,
  //   },
  // };

  const [markSound, setMarkSound] = useState<any[]>([DEFAULT_MARK]); // move to CategorizableSoundList !!!

  const onEditMarkSound = (index: number, selected: any) => {
    const clone = [...markSound]; // for change ref data
    clone[index] = {
      category: selected.category,
      subCat: selected.subCat,
    };
    setMarkSound(clone);
  };

  const onAddMarkSound = () => {
    const clone = [...markSound];
    clone.push({
      category: "",
      subCat: [],
    });
    setMarkSound(clone);
  };

  const onDeleteMarkSound = (index: number) => {
    if (index === 0) {
      return;
    }
    setMarkSound(markSound.filter((mark: any, i: number) => i !== index));
  };

  useEffect(() => {
    console.log("markSound ", markSound);
  }, [markSound]);

  return (
    <>
      <Paper className={classes.paper}>
        <Box display="flex" mb={2}>
          <Box>
            <h2 className="wh2 my-0">เลือกประเภทของเสียง</h2>
            <p className="wp4 my-0">ระบุประเภทเสียงภายในเสียงย่อย</p>
          </Box>
          <Box mx={2}>
            <Button variant="outlined" color="primary" onClick={onAddMarkSound}>
              เพิ่มเสียง <AddIcon />
            </Button>
          </Box>
        </Box>

        <CategorizableSoundList
          markItems={markSound}
          onEdit={onEditMarkSound}
          onDelete={onDeleteMarkSound}
        />
      </Paper>
    </>
  );
};

export default CategorizableBox;
