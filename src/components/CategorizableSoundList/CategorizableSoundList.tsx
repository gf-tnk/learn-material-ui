import React, { useEffect, useState } from "react";
import CategorizableSound from "../CategorizableSound/CategorizableSound";
import { Box } from "../ContainerBox/ContainerBox";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { useStyles } from "./style";

import {
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
interface Props {
  markItems: any[];
  onEdit: (index: number, selected: any) => void;
  onDelete: (index: number) => void;
}

const ID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, 9);
};

const CategorizableSoundList: React.FC<Props> = (props) => {
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
          children: [{ id: ID(), name: "ระบุสถานที่" }],
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
          children: [{ id: ID(), name: "ระบุเสียงประกอบ" }],
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

  const classes = useStyles();

  return (
    <>
      {props.markItems.map((item: any, index: number) => (
        <Accordion
          key={"panel-" + index}
          defaultExpanded={index === props.markItems.length - 1}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={`panel-header-${index}`}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              height="100%"
            >
              <Box>
                <h3 className="wh3 my-0">{item}</h3>
              </Box>
              <Box>
                <IconButton
                  aria-label="delete"
                  onClick={() => props.onDelete(index)}
                  className={classes.btnDelete}
                >
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <CategorizableSound
              items={categoryItems}
              onEdit={props.onEdit}
              key={index}
              index={index}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default CategorizableSoundList;
