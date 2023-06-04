import { createSlice, current } from "@reduxjs/toolkit";



const initialState = {
    cartProducts: JSON.parse(localStorage.getItem('cart-products')) || [],
    totalItemPrice: 0,
    totalPrice: 0,
    shippingFee: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: {
            reducer: (state, action) => {
                const previousItem = state.cartProducts.findIndex(item => item._id === action.payload.product._id)
                if (previousItem < 0) {
                    state.cartProducts.push({
                        ...action.payload.product,
                        noOfProduct: action.payload.itemCount,
                        totalItemPrice: action.payload.itemCount * action.payload.product.product_price
                    });
                }
                else {
                    state.cartProducts[previousItem] = {
                        ...state.cartProducts[previousItem],
                        noOfProduct: state.cartProducts[previousItem].noOfProduct += action.payload.itemCount,
                        totalItemPrice: state.cartProducts[previousItem].totalItemPrice +=
                            state.cartProducts[previousItem].product_price * action.payload.itemCount
                    }
                }
                let tempTotalPrice = 0
                state.cartProducts?.map(item => {
                    tempTotalPrice += item.totalItemPrice
                })
                state.totalPrice = tempTotalPrice
                localStorage.setItem('cartProducts', JSON.stringify(current(state)))
            },
            prepare({ product, itemCount }) {
                return { payload: { product, itemCount } }
            }
        },
        cartTotalPrice: (state, action) => {
            state.cartProducts?.map(item => {
                state.totalPrice + item.totalItemPrice
            })
        },
        cartItemQtyUpdate: (state, action) => {
            console.log(action)
            let previousItem = state.cartProducts?.find(item => item._id === action.payload.product_id);
            if (previousItem) {
                previousItem.noOfProduct = Number(action.payload.qty)
                previousItem.totalItemPrice = Number(action.payload.qty) * previousItem.product_price
            }
            localStorage.setItem('cartProducts', JSON.stringify(current(state)))
        }
    }
})

export const { addToCart, cartItemQtyUpdate } = cartSlice.actions
export default cartSlice.reducer;

