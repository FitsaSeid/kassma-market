import React from 'react'

function Rating({ rating }) {
    return (
        <div>
            {(() => {
                const rate = [];
                for (let x = 1; x <= 5; x++) {
                    rate.push(
                        <i className={
                            rating >= x ? "fa-solid fa-star" :
                                rating >= (x - 0.5) ? "fa-solid fa-star-half-stroke" :
                                    "fa-shape fa-regular fa-star"} style={{
                                        color: "#013d2b",
                                        fontSize: "12px"
                                    }}></i>
                    )
                }
                return rate
            })()
            }
        </div>
    )


}

export default Rating