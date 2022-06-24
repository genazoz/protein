import React from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";
import styled from "styled-components";
import axios from "axios";

import Header from "./components/Header";
import Preloader from "./components/Preloader";
import CartModal from "./components/CartModal";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import Card from "./pages/Card";
import NotFound from "./pages/NotFound";
import Balls from "./components/Balls/Balls";

const AppWrapper = styled.div``;

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [menuOpened, setMenuOpened] = React.useState(false);
  const [showPreloader, setShowPreloader] = React.useState(true);
  const [previewSubmitHovered, setPreviewSubmitEnter] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const goodsPerPage = 15;
  const url = `https://62ad406c402135c7acbe4f1c.mockapi.io/`;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(`${url}/products`).then((obj) => setItems(obj.data));
        axios.get(`${url}/cart`).then((obj) => setCartItems(obj.data));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const onRemoveFromCart = async ({ id, prodId }) => {
    try {
      axios
        .delete(`${url}/cart/${id}`)
        .then(() =>
          axios.get(`${url}cart`).then((obj) => setCartItems(obj.data))
        );
    } catch (e) {
      console.log(e);
      alert("Ошибка при удалении из корзины");
    }
  };

  const onAddToCart = async (goods) => {
    const itemInCart = cartItems.find(
      (cartItem) => cartItem.prodId === goods.prodId
    );

    if (itemInCart) {
      onRemoveFromCart({ id: itemInCart.id, prodId: itemInCart.prodId });
    } else {
      try {
        axios.post(`${url}cart`, goods).then(function (response) {
          axios.get(`${url}cart`).then((obj) => setCartItems(obj.data));
        });
      } catch (e) {
        console.log(e);
        alert("Ошибка при добавлении в корзину");
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        items,
        url,
        goodsPerPage,
        cartItems,
        onAddToCart,
        showCart,
        setShowCart,
        menuOpened,
        setMenuOpened,
        showPreloader,
        setShowPreloader,
        previewSubmitHovered,
        setPreviewSubmitEnter,
      }}
    >
      <AppWrapper>
        <Header />
        <CartModal />
        {showPreloader && <Preloader />}
        <Routes>
          <Route path="react-protein" exact element={<Home />}></Route>
          <Route
            path="react-protein/contact"
            exact
            element={<Contact />}
          ></Route>
          <Route
            path="react-protein/catalog"
            exact
            element={<Catalog />}
          ></Route>
          <Route path="react-protein/card" exact element={<Card />}></Route>
          <Route path="*" exact element={<NotFound />}></Route>
        </Routes>
      </AppWrapper>
    </AppContext.Provider>
  );
}

export default App;
