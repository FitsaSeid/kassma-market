export const allProducts = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'ALL PRODUCTS FETCHED SUCCESSFULLY':
            return ({
                products: action.payload
            })
        case 'All PRODUCTS FETCH FAIL':
            return ({
                error: action.payload
            })
        default:
            return state
    }
}

export const singleProduct = (state = { product: [], error: '' }, action) => {
    switch (action.type) {
        case 'SINGLE PRODUCT FETCHED SUCCESSFULLY':
            return ({
                product: action.payload
            })
        case 'SINGLE PRODUCT FETCH FAIL':
            return ({
                error: action.payload
            })
        default:
            return state;
    }
}