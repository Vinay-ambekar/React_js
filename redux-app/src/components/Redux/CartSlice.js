import { createSlice } from "@reduxjs/toolkit";



const CartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{

        add(state, action){
            const existingProductIndex = state.findIndex(item => item.id === action.payload.id);

            // If the product doesn't exist, add it
            if (existingProductIndex === -1) {
                state.push(action.payload);
                alert(`${action.payload.title} is added to cart`)
                //console.log('added',action.payload.title);
            } else {
                alert(`${action.payload.title} product already exists in cart`)
                //console.log('Product already exists:', action.payload);
            }
        },
        /* add(state, action){

            state.push(action.payload)
            console.log('state:',state)
        } */
        remove(state,action){
            return state.filter((item)=>item.id !== action.payload)
        }
    }
})

//console.log('cart length:',CartSlice)

export const {add,remove} = CartSlice.actions
export default CartSlice.reducer