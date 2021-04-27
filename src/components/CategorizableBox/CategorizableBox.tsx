import { Button, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect, useState, useRef } from "react";
import { useStyles } from "./style";
import CategorizableSoundList from "../CategorizableSoundList/CategorizableSoundList";
import { Box } from "../ContainerBox/ContainerBox";

const CategorizableBox = () => {
  const classes = useStyles();
  const DEFAULT_SELECTED = {
    name: "",
    subCat: [],
  };
  const [markSound, setMarkSound] = useState<any[]>(["เสียงที่ 1"]); // move to CategorizableSoundList !!!
  const allSelected = useRef<any>([DEFAULT_SELECTED]);

  const onEditMarkSound = (index: number, selected: any) => {
    // this is the issue that mark performance is slowdown !!!
    const clone = [...allSelected.current];
    clone[index] = {
      category: selected.category,
      subCat: selected.subCat,
    };
    allSelected.current = clone;
  };

  const onAddMarkSound = () => {
    allSelected.current.push({
      category: "",
      subCat: [],
    });
    const clone = [...markSound]
    clone.push(`เสียงที่ ${clone.length + 1}`)
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
          <Box mx={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setMarkSound([])
                allSelected.current = []
              }}
            >
              ลบทั้งหมด <AddIcon />
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => console.log(allSelected.current)}
            >
              check all selected <AddIcon />
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
