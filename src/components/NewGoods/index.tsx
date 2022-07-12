import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import {Footer, CardA} from "../";
import Button from "../../elements/Button";
import Logo from "../../elements/Logo";
import {Goods} from "../../redux/slices/goodsSlice";

const Section = styled.section`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
`;
const HeaderWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 185px 0 0 0;
  padding: 0 24px;

  text-align: center;

  @media (max-width: ${theme.media.desktop}) {
    margin: 135px 0 0 0;
  }
  @media (max-width: ${theme.media.tab}) {
    margin: 130px 0 0 0;
  }
  @media (max-width: 350px) {
    margin: 100px 0 0 0;
  }
`;
const LogoWrapper = styled.h2`
  margin: 0 0 40px;

  @media (max-width: ${theme.media.mob}) {
    margin: 0 0 30px;
  }
`;
const Subtitle = styled.p`
  width: 500px;
  max-width: 100%;

  font-size: 16px;
  color: #bbb;
`;
const ButtonWrapper = styled.div`
  margin-top: 30px;
`;
const GoodsSlider = styled.div`
  margin: 15px 0 auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 30px calc((100% - 1240px) / 2) !important;

  @media (max-width: ${theme.media.tab}) {
    padding: 30px calc((100% - 85%) / 2);
  }
  @media (max-width: ${theme.media.tabMd}) {
    width: calc(100% - 64px * 2);
  }
  @media (max-width: ${theme.media.mob}) {
    width: 100%;
  }
  @media (max-width: ${theme.media.mobSm}) {
    height: 350px;
  }
`;
const FooterSection = styled(Section)`
  height: max-content;
  margin: 0;
  padding: 0 calc((100% - 1320px) / 2);
`;
const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  margin-top: auto;

  @media (max-width: ${theme.media.tab}) {
    width: 85%;
  }
  @media (max-width: ${theme.media.tabMd}) {
    width: calc(100% - 64px * 2);
  }
  @media (max-width: ${theme.media.mob}) {
    width: calc(100% - 24px * 2);
  }
  @media (max-width: ${theme.media.mobSm}) {
    display: none;
  }
`;

type NewGoodsProps = {
  items: Goods[]
}

export const NewGoods:React.FC<NewGoodsProps> = ({items}) => {
  return (
    <Section>
      <HeaderWrapper>
        <LogoWrapper>
          <Logo text={"Новинки"} big/>
        </LogoWrapper>
        <Subtitle>
          Здесь располагаются новые товары данрного магазина. Тоавары находятся
          прямо вон снизу. Вот вы можете изх увидеть.Здесь располагаются новые
          товары данрного магазина. Тоавары находятся прямо вон снизу. Вот вы
          можете изх увидеть.
        </Subtitle>
        <ButtonWrapper>
          <Button theme={'green'} text={"Перейти в каталог"} type={"link"} href={"/catalog"}/>
        </ButtonWrapper>
      </HeaderWrapper>
      <GoodsSlider
        as={Swiper}
        modules={[Autoplay]}
        spaceBetween={55}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loopAdditionalSlides={20}
        centeredSlides={true}
        onSwiper={(swiper: any) => {
          setTimeout(function () {
            swiper.slideNext();
            swiper.slideNext();
          }, 100)
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.4,
            spaceBetween: 20,
            centeredSlides: true,
          },
          500: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 4,
          },
        }}
      >
        {items.map((goods, index) => (
          <SwiperSlide
            style={{display: "flex", alignItems: "center"}}
            key={index}
          >
            <CardA {...goods} />
          </SwiperSlide>
        ))}
      </GoodsSlider>
      <FooterSection>
        <FooterWrapper>
          <Footer isFull={true}/>
        </FooterWrapper>
      </FooterSection>
    </Section>
  );
}
