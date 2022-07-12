import React from "react";
import axios from "axios";
import theme from "../theme";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {settingsSelector} from "../redux/slices/settingsSlice";
import {useAppDispatch} from "../redux/store";
import {fetchGoods, Goods, goodsSelector} from "../redux/slices/goodsSlice";
import {Related} from "../components";
import "swiper/css";
import {Counter} from "../components/Counter";
import {addItem} from "../redux/slices/cartSlice";
import {Loader} from "../components/Loader";

const Card = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media (max-width: ${theme.media.tab}) {
    display: flex;
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
const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  pointer-events: none;
  background-size: 550px;
  background-position: 51% 48%;

  @media (max-width: ${theme.media.tab}) {
  }
`;
const Image = styled.img`
  position: absolute;

  width: 530px;

  @media (max-width: ${theme.media.tab}) {
    width: 240px;
  }
`;
const Circle = styled.div`
  width: 450px;
  height: 450px;

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

  color: ${theme.colors.darkBlue};
  font-family: ${theme.fonts.dinCondM};
  font-size: 28px;

  @media (max-width: ${theme.media.tab}) {
    display: none;
  }
`;
const PreviewButton = styled.button`
  width: 126px;
  margin: 20px 0 0 0;
  padding: 11px 40px 9px 40px;

  color: #FFF;

  background: ${theme.colors.darkBlue};
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
    background: #FFF;

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
  height: 100%;
  display: flex;
  flex-direction: column;

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
  justify-content: center;
  width: 100%;
  flex: 1;
  padding: 30px 12%;

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
  font-size: 70px;
  font-family: ${theme.fonts.bebasB};

  @media (max-width: ${theme.media.tab}) {
    display: none;
  }
`;
const DescriptionAboutText = styled(DescriptionText)`
  width: 60%;
  margin: 5px 0 0 0;

  font-family: ${theme.fonts.dinCondM};
  font-size: 18px;

  @media (max-width: ${theme.media.mob}) {
    display: flex;
    width: 100%;
  }
`;
const DescriptionCategory = styled(DescriptionText)`
  margin: 20px 0 5px 0;

  font-family: ${theme.fonts.bebasB};
  font-size: 20px;

  @media (max-width: ${theme.media.mob}) {
    display: flex;
  }
`;
const DescriptionAmount = styled(DescriptionCategory)`
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

function CardPage() {
  const dispatch = useAppDispatch();
  const {items} = useSelector(goodsSelector);
  const {id} = useParams();
  const {url} = useSelector(settingsSelector);
  const [goods, setGoods] = React.useState<Goods>();
  const [count, setCount] = React.useState<number>(1);

  React.useEffect(() => {
    const queryCategories = ``;
    const querySearch = ``;
    const goodsPerPage = 4;
    const currentPage = 1;
    const fetchGoodsParams = {url, queryCategories, querySearch, goodsPerPage, currentPage}

    dispatch(fetchGoods(fetchGoodsParams))

    async function fetchProduct() {
      try {
        const {data} = await axios.get(`${url}products/${id}`);
        setGoods(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProduct();
  }, [id])

  const onClickAddToCartButton = () => {
    if (!goods)
      return;

    const goodsData: Goods = goods;

    dispatch(addItem({goods: goodsData, count: count}));
  };

  const onChangeCount = (number: number) => {
    setCount(number);
  };

  if (!goods) {
    return <Loader/>;
  }

  return (
    <Card>
      <Preview>
        {/*{window.innerWidth > 1200 && (*/}
        {/*  <ImageWrapper style={{backgroundImage: `url(/${goods.imageUrl})`}}></ImageWrapper>)}*/}
        {/*{window.innerWidth <= 1200 && (*/}
          <ImageWrapper>
          <Circle/>
          <Image src={`/${goods.imageUrl}`} alt="item"/>
        </ImageWrapper>
        {/*)}*/}
      </Preview>
      <Footer>
        <Description>
          <PreviewPrice>{goods.price}Р</PreviewPrice>
          <DescriptionName>{goods.title}</DescriptionName>
          <DescriptionCategory>Описание</DescriptionCategory>
          <DescriptionAboutText>
            Have A Rest – это прежде всего комфорт, красота, стиль и
            технологичность.Мы хотим, чтобы каждая твоя поездка была просто
            незабываемой, а наши аксессуары не переставали
          </DescriptionAboutText>
          <DescriptionAmount>Количество</DescriptionAmount>
          <Counter onChangeCount={onChangeCount}/>
          <div className="item-flexRow">
            <div className="flexRow flexRow_margin">
              <i className="fas fa-truck"></i> Бесплатная доставка от 3000р
            </div>
            <div className="flexRow">
              <i className="fas fa-map-marker-alt"></i> Есть в наличии
            </div>
          </div>
          <DescriptionButton onClick={onClickAddToCartButton}/>
          <PreviewButton onClick={onClickAddToCartButton}/>
        </Description>
        <Related items={items}/>
      </Footer>
    </Card>
  );
}

export default CardPage;
