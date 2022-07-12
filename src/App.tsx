import React from "react";
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {settingsSelector} from "./redux/slices/settingsSlice";

import MainLayout from "./layouts/MainLayout";
import {Preloader} from "./components";
import {Loader} from "./components/Loader";

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ "./pages/Home"));
const Catalog = React.lazy(() => import(/* webpackChunkName: "Catalog" */ "./pages/Catalog"));
const Contact = React.lazy(() => import(/* webpackChunkName: "Contact" */ "./pages/Contact"));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ "./pages/Cart"));
const Card = React.lazy(() => import(/* webpackChunkName: "Card" */ "./pages/Card"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound"));

function App() {
  const {showPreloader} = useSelector(settingsSelector);

  return (
    <>
      {showPreloader && <Preloader/>}
      <React.Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="protein/" element={<Home/>}></Route>
            <Route path="protein/contact" element={<Contact/>}></Route>
            <Route path="protein/catalog" element={<Catalog/>}></Route>
            <Route path="protein/card/:id" element={<Card/>}></Route>
            <Route path="protein/cart" element={<Cart/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Route>
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
