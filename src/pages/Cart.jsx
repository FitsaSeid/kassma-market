import React, { useEffect } from 'react'
import CartItem from '../components/CartItem'
import product from '../data/data'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../action/cart';

function Cart() {
    const [searchParams] = useSearchParams();
    const { id } = useParams()

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.addToCart);

    console.log(cartItems)
    const quantity = searchParams.get('quantity');

    useEffect(() => {
        dispatch(addToCart(id, quantity))
    }, [dispatch])

    return (
        <div>
            {
                product?.map(product => (
                    <div key={product.id}>
                        <CartItem
                            product_name={product.product_name}
                            product_image={product.product_image}
                            product_price={product.product_price}
                            rating={product.product_rating}
                            noOfReview={product.noOfReview}
                            quantity={quantity} />
                    </div>

                ))
            }

        </div>
    )
}

export default Cart