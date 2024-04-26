
import { useEffect, useState } from "react";



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
    
    <div className="container d-flex justify-content-center mt-5"> 
    
            <div className=" position-relative">
            <>
              {imgdata.length > 0 ? (
              imgdata?.map((imgs,i) => (
              <img key={i} className="img-fluid w-50" src={imgs.url}alt="#"/>
              ))) : (
              <p>img is loadding ...</p>
              )} 
            </>
            <button className="btn btn-primary position-absolute top-50 start-0 translate-middle rounded-circle" onClick={prev}><i class="fa-solid fa-chevron-left "></i></button> 
            <button className="btn btn-primary position-absolute top-50 start-50 translate-middle rounded-circle"  onClick={nextimg}><i class="fa-solid fa-chevron-right"></i></button> 
            </div>
        
    </div>    
    
    </>
  );
};
export default Home;
