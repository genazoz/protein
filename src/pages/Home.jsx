import Preview from "../components/Preview";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import theme from "../theme";
import NewGoods from "../components/NewGoods";
import axios from "axios";
import AppContext from "../context";

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
const Background = styled.span`
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
        width: 100%;
    }
    @media (max-width: ${theme.media.tab}) {
        width: 95%;
    }
    @media (max-width: ${theme.media.tabMd}) {
        width: calc(100% - 64px * 2);
        height: 206px;
    }
    @media (max-width: ${theme.media.tabSm}) {
        height: 295px;
    }
    @media (max-width: ${theme.media.mob}) {
        width: 51%;
        height: 200px;
    }
    @media (max-width: 380px) {
        width: 90%;
        height: 0;
    }`}
`;

function Home() {
  const [destinationIndex, setDestinationIndex] = React.useState(0);
  const [goods, setGoods] = React.useState([]);
  const { url } = React.useContext(AppContext);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(`${url}/products`).then((obj) => setGoods(obj.data));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Main>
      <Background isHidden={destinationIndex} />
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
                <NewGoods items={goods} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Main>
  );
}

export default Home;
