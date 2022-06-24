import React from "react";

import AppContext from "../../context";
import styled from "styled-components";
import theme from "../../theme";
import GoodsCard from "../GoodsCard";

const GoodsList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;

  @media (max-width: ${theme.media.tab}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
  @media (max-width: ${theme.media.mob}) {
    grid-template-columns: repeat(1, 1fr);
  }

`;

function GoodsListComponent({items}) {
  return (
    <GoodsList>
      {items.map((goods, index) => (
        <GoodsCard {...goods} key={index} />
      ))}
    </GoodsList>
  );
}

export default GoodsListComponent;
