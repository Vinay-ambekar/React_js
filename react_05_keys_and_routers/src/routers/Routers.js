import { Routes,Route } from "react-router-dom"

import React from "react";
import Arrays from "../ArrayComponent/Arrays";
import Objects from "../Objects/Objects";
import Home from "../homecomponet/Home";

const Routers=({AndroindPhones,Arrobjects})=>{
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/arrays' element={<Arrays  phone={AndroindPhones}  />} />
            <Route path="/objects" element={<Objects Arrobjects={Arrobjects}/>}/>
        </Routes>
        </>
    )
}
export default Routers;