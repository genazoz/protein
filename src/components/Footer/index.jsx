import React from "react";
import styled from "styled-components";

import theme from "../../theme";

const Footer = styled.footer`
  display: flex;
  margin: auto;
  padding: 30px;

  position: relative;
  width: calc(100% - var(--unit) * 2);

  background: ${theme.colors.green};
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;

  ${(props) => props.isFull && "width: 95%"};

  @media (max-width: ${theme.media.desktopMd}) {
    width: 100%;
  }
  @media (max-width: ${theme.media.tabMd}) {
    flex-direction: column;
    padding: 20px;
  }
  @media (max-width: 380px) {
    display: none;
  }
}
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  margin: 4px auto 0 auto;

  font-family: ${theme.fonts.bebasB};
  font-size: calc(16px + 12px);

  @media (max-width: ${theme.media.tabMd}) {
    position: relative;

    order: 0;
    margin: 20px auto;
  }

  span {
    display: block;
    width: auto;
    margin-left: -2px;
    padding: 2px 8px;

    color: white;

    background: ${theme.colors.darkBlue};
    transform: skew(-10deg) rotate(-10deg);

    @media (max-width: ${theme.media.mob}) {
      padding: 8px 8px 2px 8px;
    }
  }
`;
const Contacts = styled(Wrapper)`
  justify-content: flex-start;

  @media (max-width: ${theme.media.tabMd}) {
    order: 1;
    justify-content: space-around;
    padding: 10px 0;

    background: ${theme.colors.darkBlue};
    border-radius: 35px;
  }

  @media (max-width: ${theme.media.tabSm}) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${theme.media.mob}) {
    width: max-content;
    margin: auto auto 10px;
    padding: 0 20px;
  }

  span {
    @media (max-width: ${theme.media.mob}) {
      display: none;
    }
  }

  span,
  a {
    margin: 3px 35px 0 0;

    font-family: ${theme.fonts.dinCondM};
    font-size: calc(${theme.fontSize} + 1px);
    color: ${theme.colors.darkBlue};

    @media (max-width: ${theme.media.tabMd}) {
      margin: 12px 0;

      color: white;
    }
  }
`;
const Socials = styled(Wrapper)`
  justify-content: flex-end;
  width: 100%;

  @media (max-width: ${theme.media.tabMd}) {
    order: 2;
    justify-content: center;
    width: auto;
  }
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;

  color: ${theme.colors.darkBlue};

  border: 1px solid ${theme.colors.darkBlue};

  i {
    font-size: calc(${theme.fontSize} - 1px);
  }
`;
const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0px 0px 0px;
`;
const SocialLink = styled(Link)`
  margin: 0 10px 0 0;
`;

function FooterComponent({ isFull }) {
  return (
    <Footer isFull={isFull}>
      <Contacts>
        <span>Санкт-Петербург</span>
        <a href="http://genazoz.ru" target="_blank" rel="noopener noreferrer">
          www.genazoz.ru
        </a>
        <span>8 (993) 204 76 - 27</span>
      </Contacts>
      <Logo>
        <span>PS</span>
      </Logo>
      <Socials>
        <SocialLinksWrapper>
          <SocialLink href="#">
            <i className="fab fa-instagram"></i>
          </SocialLink>
          <Link href="#">
            <i className="fab fa-vk"></i>
          </Link>
        </SocialLinksWrapper>
      </Socials>
    </Footer>
  );
}

export default FooterComponent;
