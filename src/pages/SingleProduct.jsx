import React, { useState } from 'react'
import headphone from '../assets/images/headphone2.png'
import Rating from '../components/Rating';
function SingleProduct() {
    const [itemCount, setItemCount] = useState(0);

    const increase = () => {
        setItemCount(itemCount + 1);
    }

    const decrease = () => {
        setItemCount(itemCount - 1);
    }


    return (
        <div className='singleProduct'>
            <div className="singleProduct__images">
                <div className="primary__image">
                    <img src={headphone} alt="" />
                </div>
                <div className="secondary__images">
                    <div>
                        <img src={headphone} alt="" />
                    </div>
                    <div>
                        <img src={headphone} alt="" />
                    </div><div>
                        <img src={headphone} alt="" />
                    </div><div>
                        <img src={headphone} alt="" />
                    </div>
                </div>
            </div>

            <div className="singleProduct__details">
                <div className="info">
                    <h3 className="title">Single Product Title</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur molestiae exercitationem, magnam officiis recusandae, id delenii.</p>
                </div>

                <div className="product__rating">
                    <Rating rating={4.5} />
                    <p>{13} reviews</p>
                </div>

                <div className="price">
                    <h4>$999.00</h4>
                </div>
                <div className="actions">
                    <div className="counter">
                        <div className='count__action'>
                            <p onClick={decrease}>-</p>
                            <p>{itemCount}</p>
                            <p onClick={increase}>+</p>
                        </div>
                        <p className="total__items">Only 46 items left</p>
                    </div>
                    <div className="main__actions">
                        <button className='btn__buyNow'>Buy Now</button>
                        <button className='btn__addToCart'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleProduct