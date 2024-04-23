import { Routes,Route } from "react-router-dom";
import React from "react";
import Counting from "../Components/Count/Counting.js";
import Home from "../Components/Home/Home.js";
import Formvalidation from "../Components/Formvalidation/Formvalidation.js";
import Userlist from "../Components/userlist/Userlist.js";
import Pagination from "../Components/pagination/Pagination.js";


const Routing=()=>{
return(
    <>
        <Routes>
            <Route path="/count" element={<Counting/>}/>
            <Route path="/contactus" element={<Formvalidation/>}/>
            <Route path="/userlist" element={<Userlist/>}/>
            <Route path="//pagination" element={<Pagination/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </>
)
}
export default Routing;