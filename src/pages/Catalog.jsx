import GoodsList from "../components/GoodsList";
import styled from "styled-components";
import React from "react";
import AppContext from "../context";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import axios from "axios";
import SearchLine from "../components/SearchLine";
import Pagination from "../components/Pagination";

const Catalog = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 130px;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Wrapper = styled.div`
  flex: 1;
  margin: 0 0 100px 0;
  padding: 0 var(--unit);
`;

function CatalogComponent() {
  const [countOfPages, setCountOfPages] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategories, setActiveCategories] = React.useState([]);
  const [goods, setGoods] = React.useState([]);
  const { url, goodsPerPage } = React.useContext(AppContext);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const queryCategories =
          activeCategories.length > 0 ? `&category=[${activeCategories}]` : "";
        const querySearch = searchQuery ? `&search=${searchQuery}` : "";

        axios
          .get(`${url}products?${queryCategories}${querySearch}`)
          .then((obj) =>
            setCountOfPages(Math.ceil(obj.data.length / goodsPerPage))
          );
        axios
          .get(
            `${url}products?p=${currentPage}&l=${goodsPerPage}${queryCategories}${querySearch}`
          )
          .then((obj) => {
            setGoods(obj.data);
          });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [activeCategories, searchQuery, currentPage]);

  const onClickCategory = (index) => {
    const isClickedCategory = activeCategories.find(
      (category) => category === index
    );
    setCurrentPage(1);

    if (index === 0) {
      setActiveCategories([]);
      return;
    }
    if (isClickedCategory !== undefined) {
      const newArray = activeCategories.filter(
        (category) => category !== index
      );
      setActiveCategories(newArray);
    } else {
      setActiveCategories([...activeCategories, index]);
    }
  };
  const onSearchTyping = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Catalog>
      <Wrapper>
        <SearchLine onSearchTyping={(e) => onSearchTyping(e)} />
        <Categories
          activeCategories={activeCategories}
          setActiveCategories={setActiveCategories}
          onClickCategory={(i) => onClickCategory(i)}
        />
        <GoodsList items={goods} />
        <Pagination countOfPages={countOfPages} goodsPerPage={goodsPerPage} setCurrentPage={setCurrentPage}/>
      </Wrapper>
      <Footer />
    </Catalog>
  );
}

export default CatalogComponent;
