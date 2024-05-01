import { Routes,Route } from "react-router-dom";
import Home from "../home/Home.js";
import Product from "../products/Product.js";
import React from "react";


const Routing =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
        </Routes>
        </>
    )
}
export default Routing;