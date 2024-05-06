import { Card, CardContent, CardMedia, Typography, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';


const Products=()=>{
    let [products,setProduct]=useState([])
    const [serch,setSerch]=useState('')
    const [expandedProduct, setExpandedProduct] = useState();
    const [display,setDisplay]=useState(true)
//console.log('serch',serch)
//console.log(product)
//console.log(products.filter(product=>product.title.toLowerCase().includes('fj')))
//console.log(serch.length)

    useEffect(()=>{
        productlist()
    },[])
    async function productlist(){
        try{
            let response= await fetch('https://fakestoreapi.com/products');
            let data= await response.json()
            //console.log(data)
            setProduct(data)
        }
        catch(error){
           console.log('error:',error)
        }
    }
    const handleExpand = (productId) => {
        setExpandedProduct(productId);
       // console.log(productId)
    };
    const handleCollapse = () => {
        setExpandedProduct(null);
    };
    const handelinput=(e)=>{
        const input = e.target.value.toLowerCase().trim(); // Convert input to lowercase and remove leading/trailing spaces
        setSerch(input);
        if(e.target.value.length === 0) {
            setDisplay(true) 
          }else{
             setDisplay(false)
        }  
        //console.log('length of the serach',e.target.value.length)
    }
    const seleproduct=(e)=>{
       // console.log('selected',e.target.textContent.toLowerCase() ,display)
        setSerch(e.target.textContent.toLowerCase().trim()) 
        setDisplay(true) 
    }
    const handellist=()=>{
        setDisplay(true)
    }
    
    return(
    <>
        {/* search bar */}
        <center>
        <div className="input-group mb-3 w-50 mt-4">
           <span className="input-group-text" ><SearchIcon/></span>
           <input 
           type="text" 
           className="form-control" 
            value={serch}  
            onChange={handelinput} 
            onBlur={handellist} 
            
           />
        </div>
        </center>
        {/* search bar */}

        <div className="contaier d-flex justify-content-center position-relative   mt-3">
        {/* serch scroll */}
        { <div className={`${  display ? ( (serch.length === 0) ? 'd-none':'opacity-0'):'d-block '} card overflow-auto w-50 position-absolute top-25 start-25 z-0 `}>
        {products.length > 0 ? (
        products.filter(product=>product.title.toLowerCase().includes(serch)).map((product) => (
          <div key={product.id}>
            <p className="ms-5 text-start" style={{cursor:'pointer'}} onClick={seleproduct}>{product.title} </p>
          </div>
        ))) : ( <p>No products found.</p> )}
        </div>} 
      {/* serch scroll */}
        <div className={`row w-75  `}> 
            {
            products && products.length > 0 ?
            (products.filter(product=>product.title.toLowerCase().includes(serch)).map((product)=>(
            <div className=" col-sm-12 col-md-6 col-lg-6 col-xl-4" key={product.id} >
                <div >
                <Card sx={{ maxWidth:'30rem', maxHeight: '50rem', margin: '1rem auto', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)'}}>
                   <Link className="z-3" to={`/${product.id}`}> 
                    <CardMedia
                        component="img"
                        sx={{height: 200,objectFit: 'contain',margin:'0.5rem' }}
                        src={product.image}
                        alt="A Random picture found with the keyword Tokyo"
                        
                    />
                    </Link>
                    <CardContent>
                        <Typography gutterBottom variant='h6' fontWeight={600} component="div">
                             {product.title.substring(0,10)}...
                        </Typography>
                        {/* important  */}
                        <Typography className='d-block' variant="body2" color="text.secondary">
                        {expandedProduct === product.id ? product.description : product.description.slice(0, 30)+'. . .'}
                        {product.description.length > 30 && <Link onClick={() => expandedProduct === product.id ? handleCollapse() : handleExpand(product.id)}>
                        {expandedProduct === product.id ? "less" : "more"}
                         </Link>
                        }
                         {/* important  */}
                        </Typography>
                        <div>
                            <p className="fs-5 fw-medium mt-2">Price:{product.price}$</p>
                        </div>
                        <div className="d-flex justify-content-atart align-items-center">
                        <Rating name="read-only" value={product.rating.rate} readOnly />
                        <button className="btn btn-primary mx-5 w-50"> add</button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            </div>  
            ))): 
            <center className="mt-5">
            <button className="btn btn-success w-50" type="button" disabled>
            <span className="sr-only">Loading...</span>
            </button>
            </center>
            }
        </div>
     </div>
    </>
    )
}
export default Products;