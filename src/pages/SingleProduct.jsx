/* Dependencies */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd'

/*components */
import Rating from '../components/Rating';
import { singleProduct } from '../action/product';
import { fetchSingleProduct } from '../features/productSlice';
import Loading from '../components/Loading';
import product from '../data/data';
import { addToCart } from '../features/cartSlice';

function SingleProduct(props) {
    const { id } = useParams();
    const [itemCount, setItemCount] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const Product = product.find(item => item.id === parseInt(id));
    const { singleProduct, error, status } = useSelector(state => state.products)
    const cart = useSelector(state => state.addProductToCart)

    const [messageApi, contextHolder] = message.useMessage();

    const messages = (type, content) => {
        messageApi.open({
            type: type,
            content: content,
        });
    };

    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [dispatch])

    if (!singleProduct) {
        return <div>{error}</div>
    }

    const increase = () => {
        setItemCount(itemCount + 1);
    }

    const decrease = () => {
        setItemCount(itemCount - 1);
    }

    const addToCartHandler = (product) => {
        if (itemCount < 1)
            messages('error', 'You have to at lease 1 item to order ');
        else {
            dispatch(addToCart({ product, itemCount }));
        }
    }

    return (
        status === 'error' ? <Error error={error} /> :
            status === 'pending' ? <Loading /> :
                <div className='singleProduct'>
                    {contextHolder}
                    <div className="singleProduct__images">
                        <div className="primary__image">
                            <img src={singleProduct?.product_image} alt="" />
                        </div>
                        <div className="secondary__images">
                            <div>
                                <img src={singleProduct?.product_image} alt="" />
                            </div>
                            <div>
                                <img src={singleProduct?.product_image} alt="" />
                            </div><div>
                                <img src={singleProduct?.product_image} alt="" />
                            </div><div>
                                <img src={singleProduct?.product_image} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="singleProduct__details">
                        <div className="info">
                            <h3 className="title">{singleProduct?.product_name}</h3>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur molestiae exercitationem, magnam officiis recusandae, id delenii.</p>
                        </div>

                        <div className="product__rating">
                            <Rating rating={singleProduct?.product_rating} />
                            <p>{singleProduct?.noOfReview} reviews</p>
                        </div>

                        <div className="price">
                            <h4>{`$${singleProduct?.product_price}`}</h4>
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
                                <button onClick={() => { addToCartHandler(singleProduct) }} className='btn__addToCart'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div >
    )
}

export default SingleProduct