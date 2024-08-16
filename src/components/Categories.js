import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Categories = ({ onClickCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    " Закрытые",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => {
          return (
            <li
              key={uuidv4()}
              onClick={() => {
                onClickActive(i);
                onClickCategory(i);
              }}
              className={i === activeIndex ? "active" : ""}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
