import { Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import CategorizableSoundList from "../CategorizableSoundList/CategorizableSoundList";

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
      subCat: []
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
        <h2 className="wh2 my-0">เลือกประเภทของเสียง</h2>
        <p className="wp4 my-0">ระบุประเภทเสียงภายในเสียงย่อย</p>
        <button onClick={onAddMarkSound}>Add</button>
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
