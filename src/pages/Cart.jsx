import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import product from '../data/data'
import { useParams, useSearchParams } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../action/cart';

function Cart() {
    const [searchParams] = useSearchParams();
    const [refresh, setRefresh] = useState(false);
    const { id } = useParams()

    const dispatch = useDispatch();
    const quantity = searchParams.get('quantity');

    const { cartItems } = useSelector(state => state.addToCart);

    useEffect(() => {
        dispatch(addToCart(id, quantity));
        setRefresh(true)
    }, [dispatch])

    console.log(cartItems)

    return (
        <div>
            {
                cartItems?.map(product => (
                    <div key={product.id}>
                        <CartItem
                            product_name={product.product_name}
                            product_image={product.product_image}
                            product_price={product.product_price}
                            rating={product.product_rating}
                            noOfReview={product.noOfReview}
                            quantity={product.quantity} />
                    </div>
                ))
            }

        </div>
    )
}

export default Cart