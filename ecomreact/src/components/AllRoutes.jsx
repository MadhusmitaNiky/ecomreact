import React from "react";
import Products from "../Pages/Products";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SingleProdPage from "../Pages/SingleProdPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProdPage/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
