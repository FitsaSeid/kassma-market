import React from 'react'
import product from '../data/data'
import Item from '../components/Item'

function Products() {
    console.log(product)
    return (
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
    )
}

export default Products