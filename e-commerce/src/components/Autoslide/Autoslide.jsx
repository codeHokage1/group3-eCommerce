import React from "react";
import Slider from "react-slick"
import DiscountBadge from "../DiscountBadge";
import Data from "./Data";
import "./Autoslide.css"



const Autoslide = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
    };

    return (
        <div className="bg_autoslide pt-3">
            <div className="d-sm-flex container">
                <div className="border rounded col-sm-6 col-12 me-3" >
                    <Slider {...settings}>
                        {Data.map((data, index) => {
                            return (
                                <div key={index} class="card border text-center slider_card" >
                                    <DiscountBadge value="-20%" />
                                    <div class="card-body">
                                        <img src={data.src} alt="" className="slider_image" />
                                    </div>
                                    <p className="slider_tag text-white">{data.title} </p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

                <div className="border rounded col-sm-6 col-12 me-3" >
                    <Slider {...settings}>
                        {Data.map((data, index) => {
                            return (
                                <div key={index} class="card border text-center slider_card" >
                                    <DiscountBadge value="-20%" />
                                    <div class="card-body">
                                        <img src={data.src} alt="" className="slider_image" />
                                    </div>
                                    <p className="slider_tag text-white">{data.title}</p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Autoslide

