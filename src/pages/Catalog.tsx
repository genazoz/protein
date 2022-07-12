import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../redux/store";
import {setCategories, setFilters, setSearchQuery} from "../redux/slices/filterSlice";
import {fetchGoods} from "../redux/slices/goodsSlice";
import {fetchCountOfPages} from "../redux/slices/filterSlice";
import {useSearchParams} from 'react-router-dom';
import {settingsSelector} from "../redux/slices/settingsSlice";
import {filterSelector} from "../redux/slices/filterSlice";
import {goodsSelector} from "../redux/slices/goodsSlice";

import {GoodsList, Footer, Categories, SearchLine, Pagination } from "../components";
import theme from "../theme";
import Logo from "../elements/Logo";
import {Loader} from "../components/Loader";
import debounce from "lodash.debounce";

const Catalog = styled.div`
  padding-top: 130px;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Wrapper = styled.div`
  height: max-content;
  min-height: calc(100vh - 130px);
  flex: 1;
  margin: 0 0 100px 0;
  padding: 0 var(--unit);
`;
const ErrorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  margin: auto;
  padding: 60px 0 120px 0;

  @media (max-width: ${theme.media.tabMd}) {
    position: relative;

    order: 0;
    margin: 20px auto;
  }

  span {
    display: block;
    width: auto;
    padding: 0 70px;

    font-family: ${theme.fonts.bebasB};
    font-size: 80px;
    color: white;

    background: ${theme.colors.darkBlue};
    border: 10px solid ${theme.colors.green};
    box-shadow: 0 0 0 10px white;
    transform: skew(-10deg) rotate(-10deg);

    @media (max-width: ${theme.media.mob}) {
      padding: 8px 8px 2px 8px;

      font-size: 40px;
    }
  }
`;

function CatalogPage() {
  const dispatch = useAppDispatch();
  const {url, goodsPerPage} = useSelector(settingsSelector);
  const {activeCategoriesIds, currentPage, searchQuery, countOfPages} = useSelector(filterSelector);
  const {items, status} = useSelector(goodsSelector);
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickCategory = (idx: number) => {
    changeCategory(idx);
  };
  const changeCategory = React.useCallback(debounce((idx: number) => {

    const isClickedCategory = activeCategoriesIds.find((category: number) => category === idx);

    if (idx === 0) {
      dispatch(setCategories([]));
      return;
    }
    if (isClickedCategory !== undefined) {
      const newArray = activeCategoriesIds.filter((category: number) => category !== idx);
      dispatch(setCategories(newArray));
    } else {
      dispatch(setCategories([...activeCategoriesIds, idx]));
    }
  }, 200), [activeCategoriesIds])

  React.useEffect(() => {
    const activeCategoriesIds = searchParams.get('activeCategoriesIds');
    const catIds = activeCategoriesIds ? activeCategoriesIds.split(',').map(category => parseInt(category)) : [];
    const currentPageParam = searchParams.get('currentPage');
    const currentPageResult: number = currentPageParam ? parseInt(currentPageParam) : currentPage;

    dispatch(setFilters({
      currentPage: currentPageResult,
      activeCategoriesIds: catIds
    }));
  }, [])

  React.useEffect(() => {
    const queryCategories = activeCategoriesIds.length > 0 ? `&category=[${activeCategoriesIds}]` : "";
    const querySearch = searchQuery ? `&search=${searchQuery}` : "";
    const fetchGoodsParams = {url, queryCategories, querySearch, goodsPerPage, currentPage};
    const fetchCountOfPagesParams = {url, queryCategories, querySearch, goodsPerPage};

    dispatch(fetchGoods(fetchGoodsParams))
    dispatch(fetchCountOfPages(fetchCountOfPagesParams))

  }, [activeCategoriesIds, searchQuery, currentPage]);

  React.useEffect(() => {
    const params: {
      currentPage: string,
      activeCategoriesIds: string
    } = {
      currentPage: `${currentPage}` || `1`,
      activeCategoriesIds: activeCategoriesIds.length > 0 ? `${activeCategoriesIds}` : ``
    };

    setSearchParams(params)
  }, [currentPage, activeCategoriesIds]);

  return (<Catalog>
    <Wrapper>
      <SearchLine/>
      <Categories
        activeCategories={activeCategoriesIds}
        onClickCategory={onClickCategory}
      />
      {status === 'error' ? (<ErrorInfo>
        <Logo text={'Произошла ошибка'}></Logo>
      </ErrorInfo>) : (<>
        {status === 'loading' && <Loader />}
        <GoodsList items={items} loading={status === 'loading'}/>
        {items.length > 0 && countOfPages > 1 && (<Pagination goodsPerPage={goodsPerPage}/>)}
      </>)}
    </Wrapper>
    <Footer/>
  </Catalog>);
}

export default CatalogPage;
