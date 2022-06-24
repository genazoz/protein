import React from "react";
import styled from "styled-components";

import theme from "../../theme";

const SearchWrapper = styled.div`
  position: relative;

  margin: 0 0 35px 0;
`;
const Search = styled.input`
  width: 100%;
  padding: 13px 0px;

  font-size: 25px;
  font-family: ${theme.fonts.bebasB};
  color: #ffffff;

  background: transparent;
  border: unset;
  border-bottom: 1px solid #1e1d3a;

  &::placeholder {
    color: #1e1d3a;
  }

  &:focus + span,
  &:not(:placeholder-shown) + span {
    width: 100%;
  }
`;
const SearchLine = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;

  width: 0;
  height: 1px;

  background: #ffffff;

  transition: 1s width cubic-bezier(0.85, 0.01, 0.2, 0.99);
`;

function SearchLineComponent({onSearchTyping}) {
  return (
      <SearchWrapper>
          <Search type={"text"} placeholder={"Поиск товара..."} onChange={(e) => onSearchTyping(e)} />
          <SearchLine />
      </SearchWrapper>
  );
}

export default SearchLineComponent;
