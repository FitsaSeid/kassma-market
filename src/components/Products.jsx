import React from 'react'
import products from '../data/data';

function Products() {
    return (
        <>
            <div className='products'>
                <h2 className='product__title'>Trending products</h2>
                <div className='product__container'>

                    {
                        products.map(item => (
                            <div className='product' key={item.id}>
                                <div className="product__img" >
                                    <img src={item.product_image} alt={item.product_name} />
                                </div>
                                <div className="product__info">
                                    <h5 className="product__name">{item.product_name}</h5>
                                    <h5 className="product__name">{`$${item.product_price}`}</h5>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    )
}

export default Products