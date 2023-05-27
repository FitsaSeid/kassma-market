/* Dependencies */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'

/* Components */
import Banner from '../components/banner'
import Filters from '../components/Filters'
import Item from '../components/Item'
import { allProducts } from '../action/product'

function Home() {
    const dispatch = useDispatch();

    const productContainer = useSelector(state => state.allProducts);
    const { products } = productContainer
    const [messageApi, contextHolder] = message.useMessage();

    const messages = (type, content) => {
        messageApi.open({
            type: type,
            content: content,
        });
    };

    useEffect(() => {
        dispatch(allProducts())
    }, [dispatch])

    return (
        <div>
            <Banner />
            <Filters />
            <div className='products'>
                <h2 className='product__title'>Trending products</h2>
                <div className='product__container'>
                    {
                        products?.map(product => (
                            <div key={product.id}>
                                <Item
                                    product={product}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home