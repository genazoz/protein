import React from "react";
import {Header, CartModal} from "../components";
import {Outlet} from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Header/>
      <CartModal/>
      <Outlet/>
    </>)
}

export default MainLayout;