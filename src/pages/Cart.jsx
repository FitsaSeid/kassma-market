import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {

    const dispatch = useDispatch();
    const { cartProducts, totalPrice } = useSelector(state => state.addProductToCart);

    const product = cartProducts;

    useEffect(() => {
        // dispatch(addToCart(id, quantity))
    }, [dispatch])

    console.log(cartProducts)

    return (
        <div>
            {
                product?.map(product => (
                    <div key={product._id}>
                        <CartItem
                            product_id={product._id}
                            product_name={product.product_name}
                            product_image={product.product_image}
                            product_price={product.product_price}
                            rating={product.product_rating}
                            noOfReview={product.noOfReview}
                            noOfProduct={product.noOfProduct}
                            totalItemPrice={product.totalItemPrice} />
                    </div>
                ))
            }
            <div>subtotal: {product.reduce((total, item) => total + item.noOfProduct, 0)}</div>
            <div>subtotal: {product.reduce((total, item) => total + item.totalItemPrice, 0)}</div>
        </div>
    )
}

export default Cart