import baseURL from "../url/url";

export const addToCart = (productId, quantity) => async (dispatch) => {
    try {
        const { data } = await baseURL.get(`/api/v1/product/${productId}`);

        dispatch({
            type: 'ADD TO CART SUCCESSFULLY',
            payload: {
                ...data.data,
                product_price: parseFloat(quantity) * data.data.product_price,
                quantity: parseInt(quantity)
            }
        })
    } catch (error) {
        dispatch({
            type: 'ADD TO CART FAILED',
            payload: error.message
        })
    }
}

// export const cartItemCount = (dispatch) => {
//     dispatch({

//     })
// }