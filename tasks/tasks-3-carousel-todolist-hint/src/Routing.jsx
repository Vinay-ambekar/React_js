import React from "react";
import { Route ,Routes} from "react-router-dom";
import Carousel from "./component/carousel/Carousel";
import Todolist from "./component/todolist/Todolist";
import AdviceGenerator from "./component/adveiser/AdviceGenerator";
import Home from "./component/home/Home";

 const Routing=()=>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
    <Route path="/carousel" element={<Carousel/>}/>
    <Route path="/todolist" element={<Todolist/>}/>
    <Route path="/adg" element={<AdviceGenerator/>}/>
  </Routes>
  )

} 
export default Routing;