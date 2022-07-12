import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import theme from "../theme";
import {Preview, NewGoods} from "../components";
import {useSelector} from "react-redux";
import {fetchGoods, goodsSelector} from "../redux/slices/goodsSlice";
import {settingsSelector} from "../redux/slices/settingsSlice";
import {useAppDispatch} from "../redux/store";

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  margin: 0 auto;

  .fp-watermark {
    display: none !important;
  }
`;
const Background = styled.span<{isHidden: boolean}>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  width: 98vw;
  height: calc(100% - 100px);
  margin: auto;

  background: ${theme.colors.green};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  transition: 0.8s height, 1s width, 0.8s border-radius;
  transition-timing-function: cubic-bezier(0.85, 0.01, 0.2, 0.99);

  @media (max-width: ${theme.media.mob}) {
    width: calc(100% - 10px * 2);
    height: calc(100% - 80px);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }

  ${(props) =>
    props.isHidden &&
    `height: 105px; 
    width: 1450px;
    @media (max-width: 1550px) {
        width: 95%;
    }
    @media (max-width: ${theme.media.tabMd}) {
        width: calc(100% - 64px * 2);
        height: 80px;
    }
    @media (max-width: ${theme.media.mob}) {
        width: calc(100% - 32px * 2);
    }
    @media (max-width: 380px) {
        width: 90%;
        height: 0;
    }`}
`;

function Home() {
  const dispatch = useAppDispatch();
  const [destinationIndex, setDestinationIndex] = React.useState(0);
  const {items} = useSelector(goodsSelector);
  const {url} = useSelector(settingsSelector);

  React.useEffect(() => {
    const queryCategories = ``;
    const querySearch = ``;
    const goodsPerPage = 10;
    const currentPage = 1;
    const fetchGoodsParams = {url, queryCategories, querySearch, goodsPerPage, currentPage}

    dispatch(fetchGoods(fetchGoodsParams))
  }, []);

  return (
    <Main>
      <Background isHidden={destinationIndex > 0 ? true : false} />
      <ReactFullpage
        navigation={true}
        easingcss3={"cubic-bezier(.85,.01,.2,.99)"}
        scrollingSpeed={800}
        verticalCentered={true}
        normalScrollElements={".js-cart-wrapper"}
        onLeave={(origin, destination) => {
          setDestinationIndex(destination.index);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Preview destinationIndex={destinationIndex} />
              </div>
              <div className="section">
                <NewGoods items={items} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Main>
  );
}

export default Home;
