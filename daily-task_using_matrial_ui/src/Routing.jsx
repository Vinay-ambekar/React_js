import React from "react";
import { Routes,Route } from "react-router-dom"; 
import LoginForm from "./component/login_form/LoginForm";
import  Home  from "./component/home/Home.jsx";

const Routing=()=>{
    return(
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    )
}
export default Routing;