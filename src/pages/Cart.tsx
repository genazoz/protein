import React from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {clearItems} from "../redux/slices/cartSlice";
import {CardC} from '../components'
import Button from '../elements/Button'
import theme from "../theme";
import {useNavigate} from 'react-router-dom';
import { cartSelector } from "../redux/slices/cartSlice";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 130px;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Wrapper = styled.div`
  flex: 1;
  margin: 0 0 100px 0;
  padding: 0 var(--unit);
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 24px 0;`
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  widht: 100%;`
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  widht: 100%;
  margin: 30px 0;

  font-family: ${theme.fonts.dinCondM};
  font-size: 25px;

  b {
    color: ${theme.colors.green};
  }`
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${theme.media.tab}) {
    flex-direction: column;
    
    div {
      width: 100%;
      margin: 20px 0 0 0;
    }
  }`
const Goods = styled.div`
  display: flex;
  justify-content: space-between;
`
const BackButton = styled.div`
  display: flex;
  align-items: center;

  font-family: ${theme.fonts.dinCondM};
  color: #FFFFFF;

  cursor: pointer;

  svg {
    margin: 0 6px 0 0;
    stroke: #FFFFFF;
  }
`
const ClearButton = styled.div`
  display: flex;
  align-items: center;

  font-family: ${theme.fonts.dinCondM};
  color: #FFFFFF;

  cursor: pointer;

  svg {
    margin: 0 6px 0 0;
    stroke: #FFFFFF;
  }
`
const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px 40px;

  @media (max-width: ${theme.media.tab}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 22px;
    padding: 0;

    background: transparent;
    border-radius: unset;
  }`

function CartPage() {
  const {items, totalPrice, totalCount} = useSelector(cartSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickClear = () => {
    dispatch(clearItems());
  }

  return (
    <Section>
      <Wrapper>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <svg width="6" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 6.93015L6.86175 1" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
            Вернуться назад
          </BackButton>
          <ClearButton onClick={onClickClear}>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5H4.16667H17.5" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round"/>
              <path
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.33337 9.16667V14.1667" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round"/>
              <path d="M11.6666 9.16667V14.1667" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
            Очистить корзину
          </ClearButton>
        </Header>
        <Items>
          {items.map((goods: any, index: number) => (
            <CardC {...goods} key={index}/>
          ))}
        </Items>
        <Footer>
          <Details>
            <span> Товаров: <b>{totalCount} шт.</b> </span>
            <span> Сумма заказа: <b>{totalPrice} Р</b> </span>
          </Details>
          <Buttons>
            <Button theme={'green'} text={"Оплатить сейчас"}/>
          </Buttons>
        </Footer>
      </Wrapper>
    </Section>
  );
}

export default CartPage;