import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { useParams, useSearchParams } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../action/cart';

function Cart() {
    const [searchParams] = useSearchParams();
    const [refresh, setRefresh] = useState(false);
    const { id } = useParams()

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.addProductToCart);

    const { cartProducts, totalPrice } = JSON.parse(localStorage.getItem('cartProducts'))
    const quantity = searchParams.get('quantity');
    const product = cartProducts;
    useEffect(() => {
        // dispatch(addToCart(id, quantity))
    }, [dispatch])

    console.log(cartItems)

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
            <div>subtotal: {totalPrice}</div>
        </div>
    )
}

export default Cart