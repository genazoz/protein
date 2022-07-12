import React from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {filterSelector, setCurrentPage} from "../../redux/slices/filterSlice"

import theme from "../../theme";
import ReactPaginate from "react-paginate";

const PaginationWrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    margin: 40px 0 0 0;
  }

  .next, .previous {
    a {
      color: ${theme.colors.green};
    }

    &.disabled {
      pointer-events: none;

      a {
        color: #3e3d55;
      }
    }
  }

  .selected {
    width: 25px;
    height: 25px;

    border-radius: 50%;
    background: ${theme.colors.green};

    &.disabled {
      pointer-events: none;
      background: #191838;
    }
  }

  li {
    width: 25px;
    height: 25px;
    margin: 0 6px;

    cursor: pointer;

    &:nth-child(1) {
      margin-left: 0;
    }

    &.selected a {
      color: ${theme.colors.darkBlue};
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      font-size: 13px;
    }
  }
`;

export const Pagination: React.FC<{ goodsPerPage: number }> = ({goodsPerPage}) => {
  const {countOfPages, currentPage} = useSelector(filterSelector);
  const dispatch = useDispatch();

  return (
    <PaginationWrapper>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
        pageRangeDisplayed={goodsPerPage}
        pageCount={countOfPages}
        previousLabel="<"
        forcePage={currentPage - 1}
      />
    </PaginationWrapper>
  );
}
