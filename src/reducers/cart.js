export const addToCart = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'ADD TO CART SUCCESSFULLY':
            const item = action.payload;
            console.log(item)
            state.cartItems.find(i => {
                if (i.id == item.id) {
                    console.log(i)

                    return {
                        ...state,
                        quantity: parseInt(i.quantity) + parseInt(item.quantity)
                    }
                }
            })
            return {
                ...state,
                cartItems: [...state.cartItems, item]
            }
        default:
            return state
    }
}