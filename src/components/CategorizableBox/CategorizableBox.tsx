import { Button, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect, useState, useRef } from "react";
import { useStyles } from "./style";
import CategorizableSoundList from "../CategorizableSoundList/CategorizableSoundList";
import { Box } from "../ContainerBox/ContainerBox";

const CategorizableBox = () => {
  const classes = useStyles();
  const DEFAULT_SELECTED = {
    category: "",
    subCat: [],
  };
  const [markSound, setMarkSound] = useState<any[]>([DEFAULT_SELECTED]);

  const onEditMarkSound = (index: number, selected: any) => {
    const clone = [...markSound];
    clone[index] = {
      category: selected.category,
      subCat: selected.subCat,
    };
    setMarkSound(clone)
  };

  const onAddMarkSound = () => {
    const clone = [...markSound];
    clone.push(DEFAULT_SELECTED);
    setMarkSound(clone);
  };

  const onDeleteMarkSound = (index: number) => {
    setMarkSound(markSound.filter((item: any, i: number) => i !== index ));
  };

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
