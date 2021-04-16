import React, { useState } from "react";
import {
  Paper
} from "@material-ui/core";
import CategoryItem from "../CategoryItem/CategoryItem";

interface Props {
  category: any[];
}

const CategorizableSound: React.FC<Props> = (props) => {
  const DEFAULT_SELECTED = -1;
  const [selectedCat, setSelectedCat] = useState<number>(DEFAULT_SELECTED);
  const [subCate, setSubCat] = useState<any[]>()

  const onClickCategory = (index: number) => {
    setSelectedCat(index)
  }

  return (
    <>
      {props.category.map((item: any, index: number) => (
        <div onClick={() => onClickCategory(index)}>
          <CategoryItem
            key={item.id}
            title={item.name}
            desc={item.desc}
            hoverable={true}
            isActive={selectedCat === index ? true: false}
          />
        </div>
      ))}
    </>
  );
};

export default CategorizableSound;
