import { Card, CardContent, CardMedia, Typography, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product=()=>{
    let [products,setProduct]=useState([])
    const [expandedProduct, setExpandedProduct] = useState();
    //console.log(product)
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
   
    return(
        <>
        <div className="contaier d-flex justify-content-center   mt-3">
        <div className="row w-75 ">
            {
            products && products.length > 0 ?
            (products.map((product)=>(
            <div className=" col-sm-12 col-md-6 col-lg-6 col-xl-4" key={product.id} >
                <div >
                <Card sx={{ maxWidth:'30rem', maxHeight: '50rem', margin: '1rem auto', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)'}}>
                    <CardMedia
                        component="img"
                        sx={{height: 200,objectFit: 'contain',margin:'0.5rem' }}
                        src={product.image}
                        alt="A Random picture found with the keyword Tokyo"
                    />
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
export default Product;