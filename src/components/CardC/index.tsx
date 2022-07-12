import React from "react";
import styled from "styled-components";

import theme from "../../theme";
import {useAppDispatch} from "../../redux/store";
import {minusItem, addItem, removeItem} from '../../redux/slices/cartSlice'
import {Quantity} from '../'

const Card = styled.div`
  position: relative;
  z-index: 1;

  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px 24px;

  background: linear-gradient(-45deg, #1e1d3a, #282749);
  border-radius: 12px;

  @media (max-width: ${theme.media.tab}) {
    &::before {
      content: '';

      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background: #14122f;
      opacity: .7;
    }
  }
`;
const ImageWrapper = styled.div`
  position: absolute;
  z-index: -1;
  left: -30px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
`;
const Image = styled.img`
  z-index: 1;

  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (max-width: ${theme.media.tab}) {
    opacity: .4;
  }
`;
const Text = styled.span`
  display: block;

  font-family: ${theme.fonts.dinCondM};
`;
const Price = styled(Text)`
  width: 50px;
  margin: 0 30px;

  font-size: 26px;`;
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin: auto 24px;
  padding: 2px 0 0 0;

  color: #FFFFFF;
  font-size: 25px;

  opacity: .3;
  cursor: pointer;
  border: 1px solid #FFFFFF;
  border-radius: 100px;

  &:hover {
    opacity: 1;
  }
`;
const Elements = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  margin-left: auto`

type GoodsCardProps = {
  id: string;
  prodId: string;
  imageUrl: string;
  title: string;
  price: number;
  count: number;
}

export const CardC: React.FC<GoodsCardProps> = ({id, prodId, imageUrl, title, price, count}) => {
  const dispatch = useAppDispatch()

  const onClickPlus = () => {
    const goods = {id, prodId, imageUrl, title, price, count};
    dispatch(addItem({goods: goods}));
  };
  const onClickMinus = () => {
    dispatch(minusItem(prodId));
  };
  const onClickRemove = () => {
    dispatch(removeItem(prodId));
  };

  return (
    <Card>
      <ImageWrapper>
        <Image width="300" height="300" src={`/protein/${imageUrl}`} alt=""/>
      </ImageWrapper>
      <Elements>
        <Quantity count={count} onClickPlus={onClickPlus} onClickMinus={onClickMinus}/>
        <Price>{price * count}р</Price>
        <Remove onClick={() => {
          onClickRemove();
        }}>×</Remove>
      </Elements>
    </Card>
  );
}
