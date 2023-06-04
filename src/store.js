import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import cartSlice from './features/cartSlice';

const store = configureStore({
    reducer: {
        products: productSlice,
        addProductToCart: cartSlice
    }
})

export default store