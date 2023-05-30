/* Dependencies */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd'

/*components */
import Rating from '../components/Rating';
import { singleProduct } from '../action/product';
import { addToCart } from '../action/cart';

function SingleProduct(props) {
    const { id } = useParams();
    const [itemCount, setItemCount] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { product, error } = useSelector(state => state.singleProduct)
    const [messageApi, contextHolder] = message.useMessage();

    const messages = (type, content) => {
        messageApi.open({
            type: type,
            content: content,
        });
    };

    useEffect(() => {
        dispatch(singleProduct(id))
    }, [dispatch])

    if (!product) {
        return <div>{error}</div>
    }

    const increase = () => {
        setItemCount(itemCount + 1);
    }

    const decrease = () => {
        setItemCount(itemCount - 1);
    }

    const addToCartHandler = () => {
        if (itemCount < 1)
            messages('error', 'You have to at lease 1 item to order ');
        else
            dispatch(addToCart(id, itemCount))
        // navigate(`/cart/${id}?quantity=${itemCount}`)
    }
    return (
        <div className='singleProduct'>
            {contextHolder}
            <div className="singleProduct__images">
                <div className="primary__image">
                    <img src={product?.product_image} alt="" />
                </div>
                <div className="secondary__images">
                    <div>
                        <img src={product?.product_image} alt="" />
                    </div>
                    <div>
                        <img src={product?.product_image} alt="" />
                    </div><div>
                        <img src={product?.product_image} alt="" />
                    </div><div>
                        <img src={product?.product_image} alt="" />
                    </div>
                </div>
            </div>

            <div className="singleProduct__details">
                <div className="info">
                    <h3 className="title">{product?.product_name}</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur molestiae exercitationem, magnam officiis recusandae, id delenii.</p>
                </div>

                <div className="product__rating">
                    <Rating rating={product?.product_rating} />
                    <p>{product?.noOfReview} reviews</p>
                </div>

                <div className="price">
                    <h4>{`$${product?.product_price}`}</h4>
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
                        <button onClick={addToCartHandler} className='btn__addToCart'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleProduct