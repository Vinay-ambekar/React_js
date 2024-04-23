import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import '../home/home.css'


const Home = () => {
  let [imgdata, setimgdata] = useState([]);
 let [CurrentIndex,setCurrentIndex]=useState(1)
 // console.log("image", imgdata);
 useEffect(() => {
  getimg();
}, [CurrentIndex]);

const nextimg=()=>{
setCurrentIndex(CurrentIndex +1 )
}
const prev=()=>{
  setCurrentIndex(CurrentIndex === imgdata.length-1 ? 1 : CurrentIndex+1)
}

  const getimg = async () => {
    try{
        let response=await fetch(`https://jsonplaceholder.typicode.com/photos?id=${CurrentIndex}`)
       /*  let response=await fetch('https://api.escuelajs.co/api/v1/products') */
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let imgdata = await response.json();
        setimgdata(imgdata);
    } catch(error){
        console.log('error fetching images:',error)
    }
  };


  return (
    <>
  <h2>Carousel</h2>
 <Button onClick={prev}>left</Button> 
    <>
      {imgdata.length > 0 ? (
      imgdata?.map((imgs,i) => (
      <img key={i} src={imgs.url}alt="#"/>
      ))) : (
      <p>img is loadding ...</p>
      )} 
    </>
<Button onClick={nextimg}>Right</Button> 
    </>
  );
};
export default Home;
