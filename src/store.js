import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import cartSlice from './features/cartSlice';

const store = configureStore({
    reducer: {
        products: productSlice,
        addProductToCart: cartSlice
    }
})
// console.log(addToCart({ type: 'ADD TO CART SUCCESSFULLY', payload: "k" }))

export default store