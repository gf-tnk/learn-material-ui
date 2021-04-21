import { Paper, Box } from "@material-ui/core";
import React from "react";

import CategorizableSound from "../CategorizableSound/CategorizableSound";
import { useStyles } from "./style";

const ID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, 9);
};

const CategorizableBox = () => {
  const categoryItems = [
    {
      id: ID(),
      name: "Speech",
      desc: "เสียงพูด",
      type: "all",
      children: [
        {
          id: ID(),
          name: "อารมณ์",
          type: "one",
          children: [
            { id: ID(), name: "โกรธ" },
            { id: ID(), name: "เศร้า" },
            { id: ID(), name: "กลัว" },
            { id: ID(), name: "เกลียด" },
            { id: ID(), name: "ตื่นเต้น" },
            { id: ID(), name: "ดีใจ" },
            { id: ID(), name: "เฉยๆ" },
          ],
        },
        {
          id: ID(),
          name: "ภาษา",
          type: "input",
          children: [
            { id: ID(), name: "ไทย" },
            { id: ID(), name: "อังกฤษ" },
            { id: ID(), name: "ภาษาอื่นๆ" },
          ],
        },
      ],
    },
    {
      id: ID(),
      name: "Music and ambient",
      desc: "เสียงเพลง",
      type: "all",
      children: [
        {
          id: ID(),
          name: "เพลง",
          type: "one",
          children: [
            { id: ID(), name: "มีความสุข" },
            { id: ID(), name: "กระปรี้กระเปร่า" },
            { id: ID(), name: "มีพลังงานมาก" },
            { id: ID(), name: "เมามัน" },
            { id: ID(), name: "เศร้า หรือกังวล" },
            { id: ID(), name: "หดหู่" },
            { id: ID(), name: "เงียบสงบ" },
            { id: ID(), name: "พึงพอใจ" },
            { id: ID(), name: "หลอน" },
          ],
        },
        {
          id: ID(),
          name: "สถานที่ของเสียงบรรยากาศ",
          type: "input",
          children: [{ id: ID(), name: "ระบุสถานที่"}],
        },
      ],
    },
    {
      id: ID(),
      name: "Sound effect",
      desc: "เสียงประกอบสั้นๆ",
      type: "one",
      children: [
        {
          id: ID(),
          name: "เสียงประกอบที่ระบุได้",
          type: "input",
          children: [{ id: ID(), name: "ระบุเสียงประกอบ"}],
        },
      ],
    },
    {
      id: ID(),
      name: "Undefined",
      desc: "ไม่สามารถระบุได้",
      type: "one",
      children: [],
    },
  ];
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.paper}>
        <h2 className="wh2 my-0">เลือกประเภทของเสียง</h2>
        <p className="wp4 my-0">ระบุประเภทเสียงภายในเสียงย่อย</p>
        <div>
          <h3 className="wh3 my-0">เสียงที่ 1</h3>
        </div>
        
        <CategorizableSound items={categoryItems} />
      </Paper>
    </>
  );
};

export default CategorizableBox;
