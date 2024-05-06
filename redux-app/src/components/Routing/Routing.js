import { Routes,Route } from "react-router-dom";
import Home from "../home/Home.js";
import Products from "../products/Products.js";
import React from "react";
import SingleProduct from "../Single_product/SingleProduct.js";
import Cart from "../cart/Cart.js";


const Routing =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/:id" element={<SingleProduct/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
        </>
    )
}
export default Routing;