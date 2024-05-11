import { Box,Grid,Rating} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";//use from router
import { useDispatch } from 'react-redux'//use form redux
import { add } from "../Redux/CartSlice";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const SingleProduct=()=>{
 
const [product,setProduct]=useState({})
const [rating,setRating]=useState({})
//console.log(rating)
const dispatch = useDispatch()
/* back button  start*/
const {id}=useParams()
const navigate=useNavigate()
/* back button end*/

useEffect(()=>{
    const getProduct= async()=>{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data= await response.json()
        setProduct(data)
        setRating(data.rating)
    }
    getProduct()
},[id])
   
   // console.log(id)
  const handelAdd=()=>{
    
    dispatch(add(product))
   // console.log('added',add(product.title)) 
  }
    return (
        <>
        <div className="container">
        <Link className="text-primary cursor-pointer" onClick={()=>{navigate(-1)}} >< ArrowCircleLeftIcon  fontSize="large" className="mt-5"/></Link>{/* back button using useParams router hook */}
        {product && Object.keys(product).length>0 ? (
        <>
            <Box className='d-flex justify-content-center align-items-center mt-5'>
              <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center">
                 <img src={product.image} alt="#" className="img-fluid w-50" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="d-flex-colum justify-content-start">
                <p className="fs-4 fw-bold"> {product.title}</p>
                <p className="fs-5 fw-medium"> {product.category}</p>
                <p className="fs-6 text-dark"> {product.description}</p>
                <p className="fs-5 text-success fw-medium"> <span className="fs-4 fw-medium text-black">Price:</span> $ {product.price}</p>
                <p className="fs-5 text-danger fw-medium"><span className="fs-4 fw-medium text-black">In Stock:</span>  {rating.count}</p>
                <div>
                <Rating name="read-only" value={+rating.rate} readOnly />
                </div>
                <button className="btn btn-primary w-50 mt-3" onClick={handelAdd}>Add</button>
                
                </Grid>
              </Grid>
            </Box>
        </>
             ) :            
             <center className="mt-5">
             <button className="btn btn-success w-50" type="button" disabled>
             <span className="sr-only">Loading...</span>
             </button>
             </center>
        
        }
        </div>
        </>
    )
}
export default SingleProduct;