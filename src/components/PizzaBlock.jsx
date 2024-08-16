import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function PizzaBlock({ title, price, sizes, types }) {
  const typenames = ["тонкое", "традиционное"];

  const [pizzaCount, setPizzaCount] = useState(0);

  const [sizeCount, setSizeCount] = useState(0);

  const onclickButtonAdd = () => {
    setPizzaCount(pizzaCount + 1);
  };

  const onClickSize = (index) => {
    setSizeCount(index);
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img
          className="pizza-block__image"
          src="https://img.freepik.com/free-photo/meat-chicken-mushrooms-pizza-isolated-white-background-top-view-photo-menu_639032-224.jpg?t=st=1723719005~exp=1723722605~hmac=3daa9ab9e087e14a335c6221e4fcb5b692c0dd15e91259346485115a3276b624&w=740"
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{title}</h4>

        <div className="pizza-block__selector">
          <ul>
            {types.map((i) => {
              return (
                <li
                  key={uuidv4()}
                  onClick={() => {
                    onClickSize(i);
                  }}
                  className={sizeCount === i ? "active" : ""}
                >
                  {typenames[i]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((size, i) => {
              return (
                <li
                  key={uuidv4()}
                  onClick={() => {
                    onClickSize(i);
                  }}
                  className={sizeCount === i ? "active" : ""}
                >
                  {size + " см"}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{price}</div>
          <button
            className="button button--outline button--add"
            onClick={onclickButtonAdd}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{pizzaCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
