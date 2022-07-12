import React from "react";
import styled from "styled-components";

import theme from "../../theme";
import {useSelector} from "react-redux";
import {cartSelector} from "../../redux/slices/cartSlice";
import {setShowCart, settingsSelector} from "../../redux/slices/settingsSlice";
import {useAppDispatch} from "../../redux/store";

const Cart = styled.div`
  position: fixed;
  z-index: 110;
  bottom: 30px;
  right: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-left: 40px;
  
  color: ${theme.colors.darkBlue};

  background: ${theme.colors.green};
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: ${theme.media.tab}) {
    color: ${theme.colors.darkBlue};
    background: transparent;
    
    i {
      font-size:  20px;
    }
  }
`;
const CartIndicator = styled.span`
  position: absolute;
  right: 8px;
  top: 8px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;

  font-family: ${theme.fonts.bebasB};
  font-size: 11px;
  color: ${theme.colors.darkBlue};

  cursor: pointer;
  background: ${theme.colors.green};
  border-radius: 50%;

  @media (max-width: ${theme.media.tab}) {
    padding-top: 1px;
  }
`;

const ButtonComponent:React.FC = () => {
  const dispatch = useAppDispatch();
  const {showCart} = useSelector(settingsSelector);
  const {totalCount} = useSelector(cartSelector);

  const onClickShowCartButton = () => {
    dispatch(setShowCart(!showCart));
  };

  return (
    <>
      <Cart onClick={onClickShowCartButton}>
        {totalCount > 0 && (
          <CartIndicator>{totalCount}</CartIndicator>
        )}
        <i className="fas fa-shopping-bag"></i>
      </Cart>
    </>
  );
}

export default ButtonComponent;
