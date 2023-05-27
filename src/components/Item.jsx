import React from 'react'
import product from '../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import Rating from './Rating';

function Item({ product }) {
    return (
        <div className='product' >
            <div className="product__img" >
                <Link to={`/product/${product.id}`}>
                    <img src={product.product_image} alt={product.product_name} />
                </Link>
            </div>

            <div className="product__rating">
                <Rating rating={product.product_rating} />
                <p>{product.noOfReview} reviews</p>
            </div>

            <div className="product__info">
                <Link to={`/product/${product.id}`}>
                    <h5 className="product__name">{product.product_name}</h5>
                </Link>
                <h5 className="product__name">{`$${product.product_price}`}</h5>
            </div>

        </div>
    )
}

export default Item