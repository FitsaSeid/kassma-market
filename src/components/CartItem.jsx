import React from 'react'
import Rating from './Rating';

function CartItem({ product_name, product_image, product_price, quantity, rating, noOfReview }) {

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
                    <h3>{`Amount: ${quantity}`}</h3>
                </div>

            </div>
        </div>
    )
}

export default CartItem