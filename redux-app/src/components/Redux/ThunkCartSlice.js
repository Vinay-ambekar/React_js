import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice=createSlice({
    name:'product',
    initialState:{
        data:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data=action.payload
            console.log('data productslice',action)
        })
    }
})
export const {setProducts}=productSlice.actions
export default productSlice.reducer

export const fetchProducts=createAsyncThunk('products/fetch',
async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
     
    } catch (error) {
      console.error('Error fetching products:', error);
      return Promise.reject(error); // Explicitly reject for error handling
    }
  }
)
