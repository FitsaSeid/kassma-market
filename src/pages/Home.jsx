import React from 'react'
import Banner from '../components/banner'
import Filters from '../components/Filters'
import Item from '../components/Item'
import product from '../data/data'
function Home() {
    return (
        <div>
            <Banner />
            <Filters />
            <div className='products'>
                <h2 className='product__title'>Trending products</h2>
                <div className='product__container'>
                    {
                        product.map(product => (
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