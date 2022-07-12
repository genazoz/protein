import React from "react";
import styled from "styled-components";

import theme from "../../theme";

const CategoriesEl = styled.div`
  overflow-x: auto;
  display: flex;
  max-width: 100%;
  margin: 0 0 55px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.media.tab}) {
    width: 100vw;
    max-width: unset;
    margin-left: calc(-1 * var(--unit));
    padding: 0 var(--unit);
  }

  ul {
    display: flex;
  }
`;
const Category = styled.li<{ isActive: boolean }>`
  margin: 0 10px 0 0;
  padding: 9px 21px;

  font-family: ${theme.fonts.dinCondM};
  font-size: 13px;
  color: #ffffff;

  cursor: pointer;
  border-radius: 18px;
  background: #191838;

  @media (max-width: ${theme.media.tab}) {
    font-size: 14px;
  }

  ${(props) =>
          props.isActive &&
          `background: ${theme.colors.green}; color: ${theme.colors.darkBlue}`}
`;

const categoriesArray = ["Все", "Протеин", "Батончики", "Печеньки", "Креатин", "Витамины"];

type CategoriesProps = {
  activeCategories: number[];
  onClickCategory: (idx: number) => void;
}

export const Categories: React.FC<CategoriesProps> = React.memo(({activeCategories, onClickCategory}) => {
  return (
    <CategoriesEl>
      <ul>
        {categoriesArray.map((category, index) => (
          <Category
            key={index}
            onClick={() => onClickCategory(index)}
            isActive={
              activeCategories.find((category: number) => category === index) !==
              undefined || (activeCategories.length == 0 && index === 0)
            }
          >
            {category}
          </Category>
        ))}
      </ul>
    </CategoriesEl>
  );
})
