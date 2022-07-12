import React, {useRef} from "react";
import styled from "styled-components";
import debounce from 'lodash.debounce'
import {setSearchQuery} from "../../redux/slices/filterSlice";

import theme from "../../theme";
import {useAppDispatch} from "../../redux/store";

const SearchWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  margin: 0 0 35px 0;

  cursor: pointer;
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
const SearchLineEl = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;

  width: 0;
  height: 1px;

  background: #ffffff;

  transition: 1s width cubic-bezier(0.85, 0.01, 0.2, 0.99);
`;
const CloseButton = styled.i`
  position: absolute;
  right: 0;

  padding: 10px;
`

export const SearchLine: React.FC = () => {
  const [value, setValue] = React.useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const changeSearch = React.useCallback(debounce((e: any) => {
    dispatch(setSearchQuery(e.target.value));
  }, 300), [])

  const onChangeSearchQuery = (e: any) => {
    setValue(e.target.value);
    changeSearch(e);
  }

  const resetSearchQuery = () => {
    setValue('');
    dispatch(setSearchQuery(''));
    searchRef.current?.focus();
  }

  return (
    <SearchWrapper>
      <Search ref={searchRef} value={value} type={"text"} placeholder={"Поиск товара..."}
              onChange={(e) => onChangeSearchQuery(e)}/>
      <SearchLineEl/>
      {value && (<CloseButton className="fal fa-times" onClick={resetSearchQuery}></CloseButton>)}
    </SearchWrapper>);
}
