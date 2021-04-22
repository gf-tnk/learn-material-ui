import { Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import CategorizableSoundList from "../CategorizableSoundList/CategorizableSoundList";

const CategorizableBox = () => {
  const classes = useStyles();
  const DEFAULT_MARK = {
    category: "",
    subCat: {
      name: "",
      input: null,
    },
    subSubCat: {
      name: "",
      input: null,
    },
  };
  const [markSound, setMarkSound] = useState<any[]>([
    DEFAULT_MARK,
    DEFAULT_MARK,
  ]); // move to CategorizableSoundList !!!

  const onEditMarkSound = (index: number, category: string) => {
    const mark = [...markSound]; // for change ref data
    mark[index] = {
      category: category,
      subCat: {
        name: "",
        input: null,
      },
      subSubCat: {
        name: "",
        input: null,
      },
    };
    setMarkSound(mark);
  };

  useEffect(() => {
    console.log("markSound ", markSound);
  }, [markSound]);

  return (
    <>
      <Paper className={classes.paper}>
        <h2 className="wh2 my-0">เลือกประเภทของเสียง</h2>
        <p className="wp4 my-0">ระบุประเภทเสียงภายในเสียงย่อย</p>
        <CategorizableSoundList
          markItems={markSound}
          onEdit={onEditMarkSound}
        />
      </Paper>
    </>
  );
};

export default CategorizableBox;
