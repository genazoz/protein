import React, { useRef } from "react";
import styled from "styled-components";

import theme from "../../theme";
import GoodsCardCart from "../GoodsCardCart";
import AppContext from "../../context";

const Wrapper = styled.div`
  position: fixed;
  z-index: 110;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  pointer-events: none;

  ${(props) => props.isActive && `pointer-events: all;`}
`;
const Cart = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 260px;
  height: 100%;
  max-height: calc(100% - 80px);
  margin: 40px 20px 20px;

  color: black;

  border-radius: 26px;
  background: #1bbc9b;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  transform: translateX(150%);

  transition: 0.7s transform;
  transition-timing-function: cubic-bezier(0.85, 0.01, 0.2, 0.99);

  @media (max-width: ${theme.media.mob}) {
    max-height: calc(100% - 110px);
  }

  ${(props) => props.isActive && `transform: translateX(0%);`}
`;
const List = styled.ul`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: max-content;
  padding: 15px 15px 137px 15px;

  border-radius: 26px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Logo = styled.div`
  position: absolute;
  z-index: 2;
  top: -18px;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  margin: auto;

  font-size: 21px;

  transform: skew(10deg) rotate(10deg);
  border: 1px solid #ffffff;

  span {
    display: block;
    width: auto;
    padding: 2px 8px;

    color: #ffffff;

    background: ${theme.colors.darkBlue};
    transform: skew(-20deg) rotate(-20deg);

    @media (max-width: ${theme.media.mob}) {
      padding: 8px 8px 2px 8px;
    }
  }
`;
const LogoEmpty = styled(Logo)`
  position: relative;
  z-index: 2;
  top: unset;
  bottom: unset;
`;
const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 20px 0;
  padding-bottom: 15px;

  color: ${theme.colors.green};

  border-bottom: 1px solid ${theme.colors.green};
`;
const ButtonsFooter = styled.div`
  display: flex;
`;
const Buttons = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 26px;

  background: ${theme.colors.darkBlue};
  border-radius: 24px;
`;
const Amount = styled.strong`
  font-size: ${theme.fontSize} * 1.4;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  margin: 0 10px 0 0;
  padding: 0 10px;

  border: 1px solid ${theme.colors.green};
  background: 0 0;
  color: ${theme.colors.green};

  font-size: ${theme.fontSize};
  font-family: ${theme.fonts.dinCondM};

  &:hover {
    background: ${theme.colors.green};
    color: ${theme.colors.darkBlue};
  }

  &:last-child {
    margin-right: 0;
  }
`;
const Overflow = styled.div`
  width: 100%;
  height: 100%;

  cursor: pointer;

  transition: 0.7s background-color;
  transition-timing-function: cubic-bezier(0.85, 0.01, 0.2, 0.99);

  ${(props) => props.isActive && `background: rgba(0, 0, 0, 0.9);`}
`;
const EmptyCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  text-align: center;

  img {
    width: 150px;
  }
`;

function GoodsCardComponent() {
  const { showCart, setShowCart, cartItems } = React.useContext(AppContext);

  const onClickShowCartButton = () => {
    setShowCart(!showCart);
  };

  return (
    <Wrapper className={"js-cart-wrapper"} isActive={showCart}>
      <Overflow isActive={showCart} onClick={onClickShowCartButton} />
      <Cart isActive={showCart}>
        {cartItems.length > 0 ? (
          <>
            <Logo>
              <span>Корзина</span>
            </Logo>
            <List>
              {cartItems.map((goods, index) => (
                <GoodsCardCart {...goods} key={index} />
              ))}
            </List>
            <Buttons>
              <Total>
                <span>Подытог:</span>
                <Amount>9,700.00 Р</Amount>
              </Total>
              <ButtonsFooter>
                <Button>В корзину</Button>
              </ButtonsFooter>
            </Buttons>
          </>
        ) : (
          <EmptyCartWrapper>
            <LogoEmpty>
              <span>Корзина пуста</span>
            </LogoEmpty>
          </EmptyCartWrapper>
        )}
      </Cart>
    </Wrapper>
  );
}

export default GoodsCardComponent;
