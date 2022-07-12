import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import {useAppDispatch} from "../../redux/store";
import {removeItem} from '../../redux/slices/cartSlice'

const Card = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 18px;

  background: #1dcda9;
  border-radius: 12px;

  &::before {
    content: "";

    position: absolute;
    margin: auto;

    width: 155px;
    height: 155px;

    background: #27bc9d;
    border-radius: 25px;

    transform: rotate(78deg);
  }
`;
const Image = styled.img`
  z-index: 1;

  width: 105%;
  height: auto;
  
  pointer-events: none;
`;
const Remove = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin: 15px;
  padding: 2px 0 0 0;

  color: #ffffff;

  cursor: pointer;
  background: ${theme.colors.green};
  border-radius: 100px;
`;
const Text = styled.span`
  display: block;
  padding: 5px 0 0 0;

  font-family: ${theme.fonts.dinCondM};
  font-size: 20px;

  display: none;
  border-top: 1px solid ${theme.colors.darkBlue};
`;
const Name = styled(Text)`
  padding: 0 0 5px 0;

  font-size: ${theme.fontSize};

  border: unset;
`;
const Price = styled(Text)``;
const TextWrapper = styled.div`
  z-index: 1;

  width: 50%;

  color: ${theme.colors.darkBlue};
  text-align: center;
`;
const Count = styled.span`
  position: absolute;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 0 0 20% 0;

  font-size: 170px;
  font-family: ${theme.fonts.bebasB};
  word-break: break-all;
  line-height: 70px;
  color: #17977c;
`;

type GoodsCardProps = {
  prodId: string;
  imageUrl: string;
  title: string;
  price: number;
}

export const CardB: React.FC<GoodsCardProps> = ({prodId, imageUrl, title, price}) => {
  const dispatch = useAppDispatch();

  const onClickRemoveFromCartButton = () => {
    dispatch(removeItem(prodId));
  };

  return (
    <Card>
      <Remove
        onClick={() => {
          onClickRemoveFromCartButton();
        }}
      >
        ×
      </Remove>
      <Image width="300" height="300" src={`/${imageUrl}`} alt=""></Image>
      <TextWrapper>
        <Name>{title}</Name>
        <Price>{price}</Price>
      </TextWrapper>
    </Card>
  );
}
