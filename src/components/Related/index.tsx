import React from "react";
import styled from "styled-components";
import {CardA} from "../";
import {Goods} from "../../redux/slices/goodsSlice";
import theme from "../../theme";

const RelatedEl = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  height: auto;
  padding: 17px;

  background: #1f1d3b;

  @media (max-width: ${theme.media.tab}) {
    display: none;
  }
`;

type NewGoodsProps = {
  items: Goods[]
}

export const Related: React.FC<NewGoodsProps> = ({items}) => {
  return (
    <RelatedEl>
      {items.map((goods, index) => (
        <CardA {...goods} />
      ))}
    </RelatedEl>
  );
}
