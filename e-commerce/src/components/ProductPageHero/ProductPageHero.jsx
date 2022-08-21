import React from 'react'
import "./ProductPageHero.css"
import Data from "./ProductPageHeroData"

const ProductPageHero = () => {
    return (
        <div className="container">
            <div className="d-sm-flex justify-content-between">
                {/* <div className='row col-sm-6'>
                    {Data.map((data) => {
                        return (
                            <p className='border border-success col-6'> {data.title}</p>
                        )
                    })}
                </div> */}
                <div class="col-sm-5 d-sm-flex justify-content-between flex-wrap text-center">
                    {Data.map((data) => {
                        return (
                            <div className='category_border col-sm-5  py-4 m-3 '> {data.title}</div>
                        )
                    })}
                </div>
                <div class="col-sm-7">
                    <div class="card product_hero mt-2">
                        <div class="card-body">
                            <div className="hero_text text-center p-sm-5 p-4">
                                <h1 className="p-sm-5 p-4 display-5 fw-bold">BEST PLACE TO SHOP FOR YOUR GROCERIES </h1>
                            </div>
                        </div>
                        {/* <div className="box"> </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPageHero

