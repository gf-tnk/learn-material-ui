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
      children: [
        {
          id: ID(),
          name: "อารมณ์",
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
      children: [
        {
          id: ID(),
          name: "เพลง",
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
          name: "บรรยากาศ",
          children: [{ id: ID(), name: "ที่ไหน" }],
        },
      ],
    },
    {
      id: ID(),
      name: "Sound effect",
      desc: "เสียงเอ็ฟเฟค",
      children: [
        {
          id: ID(),
          name: "ของอะไร",
        },
      ],
    },
    {
      id: ID(),
      name: "Undefined",
      desc: "ไม่สามารถระบุได้",
    },
  ];
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.paper}>
        <h2 className="wh2 my-0">เลือกประเภทของเสียง</h2>
        <p className="wp4 my-0">ระบุประเภทเสียงภายในเสียงย่อย</p>
        <Box my={2}>
          <h3 className="wh3 my-0">เสียงที่ 1</h3>
        </Box>
        
        <CategorizableSound category={categoryItems} />
      </Paper>
    </>
  );
};

export default CategorizableBox;
