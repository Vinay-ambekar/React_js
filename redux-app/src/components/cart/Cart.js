import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';
import { remove } from '../Redux/CartSlice';



const Cart = ()=>{
    const cartData = useSelector((state) => state.cart)
    //console.log('cartdata',cartData)
    const dipatch =useDispatch()
    const handeitem=(id)=>{
        dipatch(remove(id))
    }
    return(
        <>
        {cartData && cartData.length > 0 ? (cartData.map((items)=>(
        <div className='container my-3' key={items.id} >
            <div className='card shadow-lg'>
                <Grid className='d-flex justify-content-center align-items-center'  container spacing={2}>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                    <div className='d-flex justify-content-center' >
                        <img src={items.image} alt={items.title} className='img-fluid p-3 w-50'/>
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className='p-2'>
                        <p className='fs-5 fw-bold text-black'>{items.title}</p>
                        <p className='fs-6 text-black'>{items.description}</p>
                        <div className='d-flex jutify-content-center align-items-center w-50 '>
                            <label className='fw-medium text-black me-2'>quntitity:</label>
                            <input type='number' className='form-control'/>
                        </div>
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <div className='p-2'>
                        <p className='fw-medium text-black me-2'>Price: ${items.price}</p>
                        <button className='btn btn-danger w-50' onClick={()=>handeitem(items.id)}><DeleteIcon/></button>
                    </div>
                    </Grid>
                </Grid>
                </div>
            </div>

    
    ))) :<p>loading</p>}
        </>
    )
}
export default Cart;