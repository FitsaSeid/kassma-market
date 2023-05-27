import baseURL from "../url/url";

export const addToCart = (productId, quantity) => async (dispatch) => {
    try {
        const { data } = await baseURL.get(`/api/v1/product/${productId}`);

        dispatch({
            type: 'ADD TO CART SUCCESSFULLY',
            payload: {
                ...data.data,
                quantity
            }
        })
    } catch (error) {
        dispatch({
            type: 'ADD TO CART FAILED',
            payload: error.response.data.message || error.message
        })
    }
}