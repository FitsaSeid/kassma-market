export const addToCart = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'ADD TO CART SUCCESSFULLY':
            const item = action.payload;
            const previousItem = state.cartItems.find(i => {
                if (i.id === item.id) {
                    item.quantity += i.quantity
                    item.product_price *= item.quantity
                    return item
                }
            })
            if (previousItem)
                return {
                    ...state,
                    cartItems: state.cartItems?.map(i =>
                        item.id === i.id ? item : i)
                }
            return {
                ...state,
                cartItems: [...state.cartItems, item]
            }
        default:
            return state
    }
}