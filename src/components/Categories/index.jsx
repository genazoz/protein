import React from "react";
import styled from "styled-components";

import theme from "../../theme";

const Categories = styled.div`
  display: flex;
  margin: 0 0 55px 0;

  ul {
    display: flex;
  }
`;
const Category = styled.li`
  margin: 0 10px 0 0;
  padding: 9px 21px;

  font-family: ${theme.fonts.dinCondM};
  font-size: 13px;
  color: #ffffff;

  cursor: pointer;
  border-radius: 18px;
  background: #191838;

  ${(props) =>
    props.isActive &&
    `background: ${theme.colors.green}; color: ${theme.colors.darkBlue}`}
`;

const categoriesArray = ["Все", "Протеин", "Батончики", "Печеньки", "Креатин", "Витамины"];

function CategoriesComponent({activeCategories, onClickCategory}) {

  return (
    <Categories>
      <ul>
        {categoriesArray.map((category, index) => (
          <Category
            isActive={
              activeCategories.find((category) => category === index) !==
              undefined || (activeCategories.length == 0 && index === 0)
            }
            key={index}
            onClick={() => onClickCategory(index)}
          >
            {category}
          </Category>
        ))}
      </ul>
    </Categories>
  );
}

export default CategoriesComponent;
