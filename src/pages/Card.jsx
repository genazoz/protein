import styled from "styled-components";
import React from "react";
import theme from "../theme";
import AppContext from "../context";

const Card = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme.media.tab}) {
    flex-direction: column;
    min-height: 100vh;
  }
}
`;
const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px 0 0 0;

  @media (max-width: ${theme.media.tab}) {
    width: 100%;
    height: auto;
    margin-top: 100px;
  }

  .flexRow {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 13px;
  }
`;
const InputWrapper = styled.div`
  margin-left: 10px;

  background: #2e2d44;
  border-radius: 1000px;

  @media (max-width: ${theme.media.tab}) {
    display: none;
  }
`;
const Input = styled.input`
  width: 45px;
  height: 37px;
  padding-left: 10px;
  margin-left: 10px;

  color: #54526c;

  border: 0;
  background: transparent;
  border-radius: 1000px;
`;
const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
`;
const Image = styled.img`
  position: absolute;

  width: 350px;

  @media (max-width: ${theme.media.tab}) {
    width: 240px;
  }
`;
const Circle = styled.div`
  width: 340px;
  height: 340px;
  margin-bottom: 60px;

  background: ${theme.colors.green};
  border-radius: 50%;

  @media (max-width: ${theme.media.tab}) {
    width: 224px;
    height: 224px;
    margin-bottom: 45px;
  }
`;
const PreviewPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: -30px;

  color: ${theme.colors.green};
  font-family: ${theme.fonts.dinCondM};
  font-size: 28px;

  @media (max-width: ${theme.media.tab}) {
    display: none;
  }
`;
const PreviewButton = styled.button`
  width: 126px;
  padding: 11px 40px 9px 40px;

  color: #54526c;

  background: #2e2d44;
  border-radius: 1000px;
  border: 0;

  @media (max-width: ${theme.media.tab}) {
    display: none;
  }

  &::before {
    content: "В корзину";
  }

  &:hover {
    padding: 12px 40px 8px 40px;

    cursor: pointer;
    background: ${theme.colors.green};

    color: ${theme.colors.darkBlue};

    &::before {
      content: "+";

      display: block;

      transform: scale(1.4);
    }
  }
`;

const Footer = styled.div`
  overflow: hidden;
  width: auto;
  margin: 30px auto 0;

  border-radius: 30px;

  @media (max-width: ${theme.media.tab}) {
    width: 100%;
    height: max-content;
    margin: auto auto 0;

    border-radius: unset;
  }

  .flexRow {
    margin-top: 10px;
    width: 100%;
    font-family: ${theme.fonts.dinCondM};
    color: ${theme.colors.darkBlue};
    font-size: 16px;

    i {
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
      float: left;
      margin-right: 8px;
    }
  }

  .flexRow_margin {
    @media (max-width: ${theme.media.mob}) {
      margin-top: 23px;
    }
  }

  .item-flexRow {
    display: flex;
    width: 100%;

    @media (max-width: ${theme.media.tab}) {
      flex-direction: column;
    }
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px 9%;

  background: ${theme.colors.green};

  @media (max-width: ${theme.media.tab}) {
    top: 0;

    overflow-y: scroll;
    display: block;
    height: 100%;
    padding: 30px;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
`;
const DescriptionText = styled.p`
  width: 100%;

  color: ${theme.colors.darkBlue};
`;
const DescriptionName = styled(DescriptionText)`
  font-size: 27px;

  @media (max-width: ${theme.media.tab}) {
    display: none;
  }
`;
const DescriptionAboutText = styled(DescriptionText)`
  display: none;
  margin: 5px 0 0 0;

  font-family: ${theme.fonts.dinCondM};
  font-size: 16px;

  @media (max-width: ${theme.media.mob}) {
    display: flex;
  }
`;
const DescriptionCategory = styled(DescriptionText)`
  display: none;
  margin: 20px 0 -5px 0;

  font-family: ${theme.fonts.bebasB};
  font-size: 20px;

  @media (max-width: ${theme.media.mob}) {
    display: flex;
  }
`;
const DescriptionPrice = styled.div`
  display: none;
  margin-bottom: 15px;

  font-family: ${theme.fonts.dinCondM};
  font-size: 25px;
  color: ${theme.colors.darkBlue};

  @media (max-width: ${theme.media.mob}) {
    display: flex;
  }
`;
const DescriptionAmount = styled(DescriptionCategory)`
  display: none;

  @media (max-width: ${theme.media.mob}) {
    display: flex;
  }
`;
const Counter = styled.div`
  display: none;
  width: 100%;
  height: 60px;
  margin-top: 10px;

  @media (max-width: ${theme.media.tab}) {
    display: flex;
  }

  .slick-active {
    font-size: 40px;
    opacity: 0.6;
  }

  .slick-center {
    font-size: 50px;
    opacity: 1;
  }
`;
const CounterNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  color: ${theme.colors.darkBlue};

  opacity: 0.3;

  transition: 0.3s all;
`;
const DescriptionButton = styled.button`
  display: none;
  width: 100%;
  margin-top: 20px;
  padding: 17px 40px 17px 40px;

  font-family: ${theme.fonts.dinCondM};
  font-size: 17px;
  color: white;

  background: #14132d;
  border-radius: 14px;
  border: 0;

  &::before {
    margin: auto;
    content: "Добавить в корзину";
  }

  @media (max-width: ${theme.media.tab}) {
    display: flex;
  }
`;
const Related = styled.div`
  display: flex;
  width: 100%;
  height: 35%;
  padding: 17px;

  background: #2e2d44;

  @media (max-width: ${theme.media.tab}) {
    display: none;
  }
`;
const GoodsCard = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3 - 18px / 3 * 2);
  min-width: 147px;
  height: 130px;
  padding: 15px;
  margin-right: 18px;

  border-radius: 15px;
  transform: unset;
  background: #28273d;

  transition: 0.15s all;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 0.4;
    transform: scale(0.93);
  }
`;
const GoodsImage = styled.img`
  max-width: 100%;
  height: 100%;
`;
const GoodsButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 15px;
  padding: 16px;

  cursor: pointer;
  border-radius: 100px;
  border: unset;
  background: #2b2b42;

  transition: 0.2s all;

  i {
    color: #54526c;
    font-size: 12px;
    overflow: visible;
  }
`;

function CardPage() {
  return (
    <Card>
      <Preview>
        <ImageWrapper>
          <Circle />
          <Image src="img/item1.png" alt="item" />
        </ImageWrapper>
        <PreviewPrice>1999Р</PreviewPrice>
        <div className="flexRow">
          <PreviewButton />
          <InputWrapper>
            <Input type="number" defaultValue={"1"} min="0" />
          </InputWrapper>
        </div>
      </Preview>
      <Footer>
        <Description>
          <DescriptionName>Whey protein</DescriptionName>
          <DescriptionPrice>1990Р</DescriptionPrice>
          <DescriptionCategory>Описание</DescriptionCategory>
          <DescriptionAboutText>
            Have A Rest – это прежде всего комфорт, красота, стиль и
            технологичность.Мы хотим, чтобы каждая твоя поездка была просто
            незабываемой, а наши аксессуары не переставали
          </DescriptionAboutText>
          <DescriptionAmount>Количество</DescriptionAmount>
          <Counter>
            <CounterNumber>1</CounterNumber>
            <CounterNumber>2</CounterNumber>
            <CounterNumber>3</CounterNumber>
            <CounterNumber>4</CounterNumber>
            <CounterNumber>5</CounterNumber>
            <CounterNumber>4</CounterNumber>
            <CounterNumber>3</CounterNumber>
            <CounterNumber>2</CounterNumber>
          </Counter>
          <div className="item-flexRow">
            <div className="flexRow flexRow_margin">
              <i className="fas fa-truck"></i> Бесплатная доставка от 3000р
            </div>
            <div className="flexRow">
              <i className="fas fa-map-marker-alt"></i> Есть в наличии
            </div>
          </div>
          <DescriptionButton />
        </Description>
        <Related>
          <GoodsCard>
            <GoodsImage src="img/item1.png" alt="goods" className="item__img" />
            <GoodsButton>
              <i className="fal fa-shopping-bag"></i>
            </GoodsButton>
          </GoodsCard>
          <GoodsCard>
            <GoodsImage src="img/item1.png" alt="goods" className="item__img" />
            <GoodsButton>
              <i className="fal fa-shopping-bag"></i>
            </GoodsButton>
          </GoodsCard>
          <GoodsCard>
            <GoodsImage src="img/item1.png" alt="goods" className="item__img" />
            <GoodsButton>
              <i className="fal fa-shopping-bag"></i>
            </GoodsButton>
          </GoodsCard>
        </Related>
      </Footer>
    </Card>
  );
}

export default CardPage;
