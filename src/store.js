import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import cartSlice from './features/cartSlice';
import apiSlice from './api/apiSlice';
import authSlice from './features/authSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        products: productSlice,
        addProductToCart: cartSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})
// console.log(addToCart({ type: 'ADD TO CART SUCCESSFULLY', payload: "k" }))

export default store