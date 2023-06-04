import React, { useState } from 'react'
import Rating from './Rating';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemQtyUpdate } from '../features/cartSlice';

function CartItem({ product_id, product_name, product_image, product_price, noOfProduct, totalItemPrice, rating, noOfReview }) {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(noOfProduct);

    const qtyUpdateHandler = () => {
        dispatch(cartItemQtyUpdate({ product_id, qty }))
    }

    return (
        <div className='cart'>
            <div className="cart__item__container">
                <div className="cart__item__image">
                    <img src={product_image} alt="" />
                </div>
                <div className="cart__item__description">
                    <div className="cart__item__title">
                        <h4>{product_name}</h4>
                        <h2>{`$${product_price}`}</h2>
                    </div>
                    <div className="product__rating">
                        <div>
                            <Rating rating={rating} />
                            <p>{noOfReview} reviews</p>
                        </div>
                        <button className='btn__remove__item__cart'>Remove from Cart</button>
                    </div>
                    <div className='cart__qty_update__button'>
                        <input type="text" defaultValue={noOfProduct} onChange={(e) => {
                            e.preventDefault()
                            setQty(e.target.value)
                        }} />
                        <button onClick={qtyUpdateHandler}>Update</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItem