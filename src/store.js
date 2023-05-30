import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { allProducts, singleProduct } from './reducers/product.js';
import { addToCart } from './reducers/cart.js';
import thunk from 'redux-thunk'

const initialState = {}
const reducers = combineReducers({
    allProducts: allProducts,
    singleProduct,
    addToCart
})
// console.log(addToCart({ type: 'ADD TO CART SUCCESSFULLY', payload: "k" }))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(thunk)
))

export default store