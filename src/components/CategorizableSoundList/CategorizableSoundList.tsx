import React from "react";
import CategorizableSound from "../CategorizableSound/CategorizableSound";
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
            { id: ID(), name: "โกรธ", color: "#F1E399"},
            { id: ID(), name: "เศร้า", color: "#C3CEF4" },
            { id: ID(), name: "กลัว", color: "#B9C6B6" },
            { id: ID(), name: "เกลียด" , color: "#ECC9A0"},
            { id: ID(), name: "ตื่นเต้น" , color: "#EBC7DA"},
            { id: ID(), name: "ดีใจ" , color: "#C3DCB4"},
            { id: ID(), name: "เฉยๆ" , color: "#D7CBE5"},
          ],
        },
        {
          id: ID(),
          name: "ภาษา",
          type: "input",
          children: [
            { id: ID(), name: "ไทย" , color: "#F1E399"},
            { id: ID(), name: "อังกฤษ" , color: "#C3CEF4"},
            { id: ID(), name: "ภาษาอื่นๆ" , color: "#B9C6B6"},
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
            { id: ID(), name: "มีความสุข" , color: "#F1E399"},
            { id: ID(), name: "กระปรี้กระเปร่า" , color: "#C3CEF4"},
            { id: ID(), name: "มีพลังงานมาก", color: "#B9C6B6" },
            { id: ID(), name: "เมามัน" , color: "#ECC9A0"},
            { id: ID(), name: "เศร้า หรือกังวล", color: "#EBC7DA" },
            { id: ID(), name: "หดหู่" , color: "#C3DCB4"},
            { id: ID(), name: "เงียบสงบ" , color: "#D7CBE5"},
            { id: ID(), name: "พึงพอใจ" , color: "#F5F3B3"},
            { id: ID(), name: "หลอน" , color: "#B6C8D2"},
          ],
        },
        {
          id: ID(),
          name: "สถานที่ของเสียงบรรยากาศ",
          type: "input",
          children: [{ id: ID(), name: "ระบุสถานที่" , color: "#F1E399"}],
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
          children: [{ id: ID(), name: "ระบุเสียงประกอบ" , color: "#F1E399"}],
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

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {props.markItems.map((item: any, index: number) => (
        <CategorizableSound
          items={categoryItems}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
          key={index}
          index={index}
          defaultExpanded={index === props.markItems.length - 1}
          expanded={expanded}
          handleExpanded={handleChange}
          selected={item}
        />
      ))}
    </>
  );
};

export default CategorizableSoundList;
