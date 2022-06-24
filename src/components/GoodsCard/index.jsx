import React, { useRef } from "react";
import styled from "styled-components";

import theme from "../../theme";
import AppContext from "../../context";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    .card-bg {
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      //opacity: 0.8;
    }

    .card {
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
      box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      background 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      border 0.6s cubic-bezier(0.23, 1, 0.32, 1);

      border: 1px solid ${theme.colors.green};
      box-shadow: rgba(0, 0, 0, 0.11) 0 30px 60px 0;
    }
  }
}`;
const Card = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  width: 100%;
  padding: 63% 0;

  border-radius: 10px;
  //background: linear-gradient(-45deg, #1e1d3a, #282749);
  border: 1px solid transparent;
  background: linear-gradient(-45deg, #1e1d3a, #282749);

  transition: 3s cubic-bezier(0.23, 1, 0.32, 1);

  &::before {
    content: "";

    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;

    display: none;
    width: 100%;
    height: 55%;

    opacity: 0;
    background: linear-gradient(to top, #1a1a37, transparent);

    transition: 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    .card-wrapper:hover & {
      opacity: 1;
    }
  }

  //${(props) => props.isSpecial && `background: ${theme.colors.green}`}}

  @media (max-width: ${theme.media.mob}) {
    height: 190px;
    padding: 0;
  }
  @media (max-width: 400px) {
    height: 180px;
  }
  @media (max-width: ${theme.media.mobSm}) {
    height: 140px;
  }

  a {
    font-family: ${theme.fonts.bebasB};
  }
`;
const Background = styled.div`
  //opacity: 0.5;
  position: absolute;
  top: -43px;
  left: 0px;
  width: 145%;
  height: 145%;
  margin: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
  background-image: url("img/item7.png");
`;
const Type = styled.div`
  display: none;
  width: auto;
  margin-right: auto;
  padding: 2px 7px;

  font-size: ${theme.fontSize} * 0.9;
  text-transform: capitalize;

  background: ${theme.colors.green};
  box-shadow: 0 0 20px ${theme.colors.green};

  ${(props) =>
    props.isSpecial && `background: #FFFFFF; color: ${theme.colors.green}`}
}
`;
const AddToCartButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 15px;
  margin: auto;
  padding: 20px;

  color: #ffffff;

  cursor: pointer;
  border: unset;
  border-radius: 100px;
  background: ${theme.colors.darkBlue};

  transition: 0.15s all;

  &:hover {
    color: ${theme.colors.darkBlue};

    background: ${theme.colors.green};
    box-shadow: 0 0 30px ${theme.colors.green};
    transform: scale(1.2);
  }

  .fa-spinner {
    position: absolute;

    opacity: 0;

    transition: 0.15s all;
  }

  .fa-shopping-bag {
    position: relative;

    opacity: 1;
  }

  a {
    color: ${theme.colors.green};
  }

  i {
    overflow: visible;
  }

  ${(props) => {
    if (props.isSpecial && props.isLoading) {
      return `
        margin-left: 15px;
        padding: 20px;
        
        color: ${theme.colors.green};
        
        border-radius: 100px;
        background: #FFFFFF;
        
        transition: 0.2s all;
        
        &:hover {
          background: #FFFFFF;
          transform: scale(1.2);
          box-shadow: 0 0 30px white;
        }
        .fa-shopping-bag {
          position: absolute;
          opacity: 0;
        }
        .fa-spinner {
          position: relative;
          opacity: 1;
          animation: spin 1s infinite;
          
          @keyframes spin {
            0% {
              transform: rotate(0deg);
              opacity: 1;
            }
            50% {
              opacity: 0.4;
            }
            100% {
              transform: rotate(360deg);
              opacity: 1;
            }
          }
        }
        `;
    }
    if (props.isLoading) {
      return `.fa-shopping-bag {
          position: absolute;
          opacity: 0;
        }
        .fa-spinner {
          position: relative;
          opacity: 1;
          animation: spin 1s infinite;
          
          @keyframes spin {
            0% {
              transform: rotate(0deg);
              opacity: 1;
            }
            50% {
              opacity: 0.4;
            }
            100% {
              transform: rotate(360deg);
              opacity: 1;
            }
          }
        }`;
    }
    if (props.isSpecial) {
      return `
        margin-left: 15px;
        border-radius: 100px;
        background: white;
        padding: 20px;
        transition: 0.2s all;
        color: ${theme.colors.green};
        
        i {
          width: 14px;
          height: 15px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px white;
        }`;
    }
  }}
`;
const Name = styled.p`
  position: absolute;
  z-index: 2;
  bottom: 60px;
  left: 0;
  right: 0;

  display: none;
  width: max-content;
  margin: auto;
  padding: 2px 7px;

  color: #ffffff;
  font-size: ${theme.fontSize} * 1.4;

  opacity: 0;
  background: ${theme.colors.green};

  transition: 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  .card-wrapper:hover & {
    opacity: 1;
  }

  ${(props) =>
    props.isSpecial &&
    `
      background: white;
      padding: 2px 7px;
      color: ${theme.colors.green};
  `}
`;
const Price = styled.p`
  position: absolute;
  z-index: 2;
  bottom: 30px;
  left: 0;
  right: 0;

  display: none;
  width: max-content;
  margin: 5px auto 0 auto;

  color: #ffffff;

  opacity: 0;

  transition: 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  .card-wrapper:hover & {
    opacity: 1;
  }
`;
const LinkElement = styled.a`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  width: 100%;
  height: 100%;
`;

function GoodsCardComponent({
  prodId,
  imageUrl,
  title,
  price,
  special = false,
}) {
  const cardRef = useRef();
  const bgRef = useRef();
  let mouseX;
  let mouseY;
  let mousePX;
  let mousePY;
  let width = 0;
  let height = 0;
  let mouseLeaveDelay = null;

  React.useEffect(() => {
    width = cardRef.current.offsetWidth;
    height = cardRef.current.offsetHeight;
  });

  const { onAddToCart } = React.useContext(AppContext);

  const handleMouseMove = (e) => {
    if (document.body.clientWidth < 1240) return 0;

    mouseX = e.pageX - cardRef.current.getBoundingClientRect().left - width / 2;
    mouseY = e.pageY - cardRef.current.getBoundingClientRect().top - height / 2;

    mousePX = mouseX / width;
    mousePY = mouseY / height;

    const rX = mousePX * 30;
    const rY = mousePY * -30;

    const tX = mousePX * -40;
    const tY = mousePY * -40;

    bgRef.current.style.transform = `translateX(${tX}px) translateY(${tY}px)`;
    cardRef.current.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;
  };
  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };
  const handleMouseLeave = () => {
    mouseLeaveDelay = setTimeout(() => {
      cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
      bgRef.current.style.transform = `translateX(0px) translateY(0px)`;
    }, 100);
  };
  const onClickAddToCartButton = () => {
    const goods = { prodId, imageUrl, title, price };

    onAddToCart(goods);
  };

  return (
    <Wrapper
      className={"card-wrapper"}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Card className={"card"} ref={cardRef} isSpecial={special}>
        <LinkElement as={Link} to={"/react-protein/card"}></LinkElement>
        <AddToCartButton
          onClick={() => onClickAddToCartButton()}
          isSpecial={special}
          isLoading={false}
        >
          <i className="fal fa-shopping-bag"></i>
          <i className="fal fa-spinner"></i>
        </AddToCartButton>
        <Background
          ref={bgRef}
          className={"card-bg"}
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></Background>
        {special && <Type isSpecial={special}>special</Type>}
        <Name isSpecial={special}>{title}</Name>
        <Price isSpecial={special}>{price}</Price>
      </Card>
    </Wrapper>
  );
}

export default GoodsCardComponent;
