import '../carousel/carousel.css'
import { useState,useEffect } from 'react';

const Carousel=()=>{
    let [imgdata, setimgdata] = useState([]);
    let [slide,setslide]=useState(0)
     console.log("image", imgdata);
     useEffect(() => {
        getimg();
      }, []);
      useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlid();
        }, 10000); 
        return () => clearInterval(intervalId); 
    }, [slide]);

     const getimg = async () => {
       try{
             /*let response=await fetch('https://fakestoreapi.com/products') */
             /*let response=await fetch('https://dummyapi.online/api/products')  */
           let response=await fetch('https://api.escuelajs.co/api/v1/products') 
           /* let response=await fetch('https://dummyapi.io/data/v1/user?page&limit=10',{
            method: 'GET',
            headers: {
                "app-id": '661f9033ab92140f115a3adf'
            }
           }) */
           if(!response.ok){
               throw new Error(`HTTP error! status: ${response.status}`);
           }
           let imgdata = await response.json();
           setimgdata(imgdata);
       } catch(error){
           console.log('error fetching images:',error)
       }
     };

     const prevSlid=()=>{
        setslide(slide === 0 ? imgdata.length-1:slide-1)
     }
    const nextSlid=()=>{
        setslide(slide === imgdata.length-1 ? 0 : slide+1)
    }

    
return(
    <>
    <div className='imges d-flex flex-column align-items-center'>
        
{imgdata.length > 0 ? (
        imgdata?.map((img,i) => (
            <>
              <img src={img.images[0]} alt="" key={img.id} className={slide===i?'slide':'slide-hidden'}/>  
             {/* <img src={img.category.image} alt="" key={img.id} className={slide===i?'slide':'slide-hidden'}/>  */}
             <p key={i} className={slide===i?'slide':'slide-hidden'} >{img.title}</p>
             
            </>
        ))
      ) : (
        <p>loadding....</p>
      )} 
      <div className='position-absolute buntns'>

      <button className='btn btn-primary mx-5 rounded-circle' onClick={prevSlid}><i className="fa-solid fa-arrow-left "></i></button>
      <button className='btn btn-primary mx-5 rounded-circle' onClick={nextSlid}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
    </>
)
}
export default Carousel;