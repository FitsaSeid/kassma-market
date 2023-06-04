/* Dependencies */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'

/* Components */
import Banner from '../components/banner'
import Filters from '../components/Filters'
import Item from '../components/Item'
import { allProducts } from '../action/product'
import { fetchProducts } from '../features/productSlice'
import Loading from '../components/Loading'

function Home() {
    const dispatch = useDispatch();

    const { products, error, status } = useSelector(state => state.products);
    const [messageApi, contextHolder] = message.useMessage();

    const messages = (type, content) => {
        messageApi.open({
            type: type,
            content: content,
        });
    };

    console.log(status)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div>
            <Banner />
            <Filters />
            {
                status === 'error' ? <Error error={error} /> :
                    status === 'pending' ? <Loading /> :
                        <div className='products'>
                            <h2 className='product__title'>Trending products</h2>
                            <div className='product__container'>
                                {
                                    products?.map(product => (
                                        <div key={product._id}>
                                            <Item
                                                product={product}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
            }
        </div>
    )
}

export default Home