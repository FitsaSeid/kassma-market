import baseURL from "../url/url"

export const allProducts = () => async (dispatch) => {

    try {
        const products = await baseURL.get('/api/v1/');
        dispatch({
            type: 'ALL PRODUCTS FETCHED SUCCESSFULLY',
            payload: products.data.data
        })
    } catch (err) {
        dispatch({
            type: 'All PRODUCTS FETCH FAIL',
            payload: err
        })
    }
}

export const singleProduct = (productId) => async (dispatch) => {
    try {
        const product = await baseURL.get(`/api/v1/product/${productId}`)
        dispatch({
            type: 'SINGLE PRODUCT FETCHED SUCCESSFULLY',
            payload: product.data.data
        })
    } catch (err) {
        console.log(err.response.data.message)
        dispatch({
            type: 'SINGLE PRODUCT FETCH FAIL',
            payload: err.response.data.message ? err.response.data.message :
                err.message
        })
    }

}