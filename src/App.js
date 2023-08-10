import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "./components/Layout/Layout";
import { Home, Carts, Products } from "./pages";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="carts" element={<Carts />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
