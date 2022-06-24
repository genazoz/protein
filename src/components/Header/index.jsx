import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../theme";
import AppContext from "../../context";
import Menu from "../Menu";
import { gsap } from "gsap";

const Header = styled.header`
  position: fixed;
  z-index: 11;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: auto;
  padding: 0 80px;

  ${(props) => props.isHidden && "opacity: 0;"}

  transition: 0.7s opacity;
  transition-timing-function: cubic-bezier(0.85, 0.01, 0.2, 0.99);

  @media (max-width: 1600px) {
    padding: 0 5vw;
  }
  @media (max-width: ${theme.media.tab}) {
    width: 92%;
    padding: 0;
  }
  @media (max-width: ${theme.media.mob}) {
    width: 100%;
    height: 80px;
    padding: 0 24px;
  }
`;
const MenuButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  cursor: pointer;
`;
const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18px;
  height: auto;

  color: ${theme.colors.darkBlue};

  cursor: pointer;
  background: transparent;
  border: unset;

  ${(props) =>
    props.isActive
      ? `animation: toggleMobileButtonA 1s forwards;`
      : `animation: toggleMobileButtonB 1s forwards;`}
  span {
    display: flex;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: white;
    margin-top: 7px;

    &:nth-child(1) {
      width: 50%;
      margin: 0 auto 0 0;
      ${(props) =>
        props.isActive
          ? `animation: toggleFirstLineA 1.5s forwards;`
          : `animation: toggleFirstLineB 1.5s forwards;`}
    }

    &:nth-last-child(1) {
      width: 50%;
      margin-left: auto;
      ${(props) =>
        props.isActive
          ? `animation: toggleThirdLineA 1.5s forwards;`
          : `animation: toggleThirdLineB 1.5s forwards;`}
    }
  }

  @keyframes toggleMobileButtonA {
    0% {
      transform-origin: center;
      transition: 0.2s all;
      transform: rotate(0deg);
    }
    36% {
      transform-origin: center;
      transition: 0.2s all;
      transform: rotate(0deg);
    }
    60% {
      transform-origin: center;
      transition: 0.2s all;
      transform: rotate(-53deg);
    }
    100% {
      transform-origin: center;
      transition: 0.2s all;
      transform: rotate(-45deg);
    }
  }
  @keyframes toggleMobileButtonB {
    0% {
      transform-origin: center;
      transition: 0.2s all;
      transform: rotate(-45deg);
    }
    36% {
      transform-origin: center;
      transition: 0.2s all;
      transform: rotate(-53deg);
    }
    60% {
      transform-origin: center;
      transition: 0.2s all;
      transform: rotate(0deg);
    }
    100% {
      transform-origin: center;
      transition: 0.2s all;
      transform: rotate(0deg);
    }
  }
  @keyframes toggleFirstLineA {
    10% {
      transform-origin: right;
      transition: 0.3s all;
      transform: rotate(9deg);
    }
    13% {
      transform-origin: right;
      transition: 0.3s all;
      transform: rotate(9deg);
    }
    35% {
      transform-origin: right;
      transition: 0.6s all;
      transform: rotate(-90deg);
    }
    100% {
      transform-origin: right;
      transition: 0.6s all;
      transform: rotate(-90deg);
    }
  }
  @keyframes toggleFirstLineB {
    0% {
      transform-origin: right;
      transition: 0.6s all;
      transform: rotate(-90deg);
    }
    30% {
      transform-origin: right;
      transition: 0.6s all;
      transform: rotate(-90deg);
    }
    50% {
      transform-origin: right;
      transition: 0.3s all;
      transform: rotate(9deg);
    }
    65% {
      transform-origin: right;
      transition: 0.3s all;
    }
    100% {
      transform-origin: right;
      transition: 0.3s all;
      transform: rotate(0deg);
    }
  }
  @keyframes toggleThirdLineA {
    10% {
      transform-origin: left;
      transition: 0.3s all;
      transform: rotate(9deg);
    }
    13% {
      transform-origin: left;
      transition: 0.3s all;
      transform: rotate(9deg);
    }
    35% {
      transform-origin: left;
      transition: 0.6s all;
      transform: rotate(-90deg);
    }
    100% {
      transform-origin: left;
      transition: 0.6s all;
      transform: rotate(-90deg);
    }
  }
  @keyframes toggleThirdLineB {
    0% {
      transform-origin: left;
      transition: 0.6s all;
      transform: rotate(-90deg);
    }
    30% {
      transform-origin: left;
      transition: 0.6s all;
      transform: rotate(-90deg);
    }
    50% {
      transform-origin: left;
      transition: 0.3s all;
      transform: rotate(9deg);
    }
    65% {
      transform-origin: left;
      transition: 0.3s all;
      transform: rotate(0deg);
    }
    100% {
      transform-origin: right;
      transition: 0.3s all;
      transform: rotate(0deg);
    }
  }
`;
const Logo = styled.a`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  margin: auto;

  font-family: ${theme.fonts.bebasB};
  font-size: calc(16px + 12px);

  span {
    display: block;
    width: auto;
    padding: 2px 8px;
    margin-left: -2px;

    color: #14132d;

    background: white;
    transform: skew(-10deg) rotate(-10deg);

    @media (max-width: ${theme.media.mob}) {
      padding: 8px 8px 2px 8px;
    }
  }
`;
const Side = styled.div`
  display: flex;
  align-items: center;
`;
const Search = styled.form`
  display: flex;

  input {
    width: 200px;
    height: auto;
    padding: 0px 10px 0 10px;

    color: #1bbc9b;

    border: 1px solid #1bbc9b;
    background: transparent;

    &::placeholder {
      color: #1bbc9b;
    }
  }
`;
const SearchWrapper = styled.div`
  @media (max-width: ${theme.media.tab}) {
    display: none;
  }
`;
const Cart = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-left: 40px;

  cursor: pointer;

  @media (max-width: ${theme.media.tab}) {
    color: #ffffff;
    background: transparent;
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

`;
const SearchButtonShow = styled.button`
  width: 37px;
  height: 37px;
  padding: 0;

  color: white;
  font-size: ${theme.fontSize};

  cursor: pointer;
  border: 0;
  border: 2px solid transparent;
  background: transparent;
`;
const SearchButtonHide = styled.button`
  width: 37px;
  height: 37px;
  margin: 0 0px 0 10px;
  padding: 0;

  color: red;
  font-size: ${theme.fontSize};

  cursor: pointer;
  border: 0;
  border: 2px solid red;
  background: transparent;
`;

function HeaderComponent() {
  const [showSearch, setShowSearch] = React.useState(false);
  const {
    menuOpened,
    setMenuOpened,
    previewSubmitHovered,
    setShowCart,
    showCart,
    cartItems,
  } = React.useContext(AppContext);

  const onClickSearchButton = () => {
    setShowSearch(!showSearch);
  };
  const onClickMenuButton = () => {
    setMenuOpened(!menuOpened);
    menuOpened ? closeMenu() : openMenu();
  };
  const onClickShowCartButton = () => {
    setShowCart(!showCart);
  };
  let isAnimating = false;

  // opens the menu
  const openMenu = () => {
    if (isAnimating) return;

    const overlayPath = document.querySelector(".js-overlay-path");
    isAnimating = true;

    gsap
      .timeline({
        onComplete: () => (isAnimating = false),
      })
      .set(overlayPath, {
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      })
      .to(
        overlayPath,
        {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
        },
        0
      )
      .to(overlayPath, {
        duration: 0.3,
        ease: "power2",
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        onComplete: () => {},
      });
  };
  // closes the menu
  const closeMenu = () => {
    if (isAnimating) return;
    isAnimating = true;

    const overlayPath = document.querySelector(".js-overlay-path");

    gsap
      .timeline({
        onComplete: () => (isAnimating = false),
      })
      // now reveal
      .set(overlayPath, {
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      })
      .to(overlayPath, {
        duration: 0.9,
        ease: "power4.in",
        attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
      })
      .to(overlayPath, {
        duration: 0.3,
        ease: "power2",
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      });
  };

  return (
    <Header className={"js-header"} isHidden={previewSubmitHovered}>
      <MenuButtonWrapper onClick={onClickMenuButton}>
        <MenuButton isActive={menuOpened}>
          <span></span>
          <span></span>
          <span></span>
        </MenuButton>
      </MenuButtonWrapper>
      <Logo as={Link} to={"react-protein"}>
        <span>PS</span>
      </Logo>
      <Side>
        <SearchWrapper>
          {showSearch ? (
            <Search method="POST" action="">
              <input
                className="searh-input"
                name="s"
                placeholder="Поиск товара..."
              />
              <SearchButtonHide
                className={"fal fa-times"}
                onClick={(e) => {
                  e.preventDefault();
                  onClickSearchButton();
                }}
              ></SearchButtonHide>
            </Search>
          ) : (
            <SearchButtonShow
              className={"fal fa-search"}
              onClick={onClickSearchButton}
            ></SearchButtonShow>
          )}
        </SearchWrapper>
        <Cart onClick={onClickShowCartButton}>
          {cartItems.length > 0 && (
            <CartIndicator>{cartItems.length}</CartIndicator>
          )}
          <i className="fal fa-shopping-bag"></i>
        </Cart>
      </Side>
      <Menu />
    </Header>
  );
}

export default HeaderComponent;
