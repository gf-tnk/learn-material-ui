import React, { useState } from "react";

import CategoryItem from "../CategoryItem/CategoryItem";

interface Props {
  category: any[];
}

const CategorizableSound: React.FC<Props> = (props) => {
  const DEFAULT_SELECTED = -1;
  const [selected, setSelected] = useState<number>(DEFAULT_SELECTED);
  const [subCategory, setSubCategory] = useState<any[]>([])


  
  return (
    <>
      {props.category.map((item: any, index: number) => (
        <div onClick={() => setSubCategory(item.children)}>
          <CategoryItem
            key={item.id}
            title={item.name}
            desc={item.desc}
            hoverable={true}
          />
        </div>
      ))}
    </>
  );
};

export default CategorizableSound;
