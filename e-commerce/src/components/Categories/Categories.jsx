import React from 'react'
import Slider from 'react-slick'
import "./Categories.css"



const Categories = () => {
  
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1, 
        autoplay: true,
      autoplaySpeed: 1000,
        className: 'react__slick__slider__parent', 
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1, 
            infinite: true,
          }
        }
      ]
    }

    return (
        <div>
            {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div className='px-1'>
            <p className='border border-outline border-2 py-2 rounded w-100'>Can and Jared</p>
          </div>
          <div className='px-1'>
            <p className='border border-outline border-2 py-2 rounded' >Dairy Products </p>
          </div>
          <div className='px-1'>
            <p className='border border-outline border-2 py-2 rounded'>Dry and Baking </p>
          </div>
          <div className='px-1'>
            <p className='border border-outline border-2 py-2 rounded' >Frozen Foods </p>
          </div>
          <div className='px-1'>
            <p className='border border-outline border-2 py-2 rounded'>Beverages </p>
          </div>
          <div className='px-1'>
            <p className='border border-outline border-2 py-2 rounded'>Others</p>
          </div>
          <div className='px-1'>
            <p className='border border-outline border-2 py-2 rounded'>Others 1 </p>
          </div>
          <div className='px-1'>
            <p className='border border-outline border-2 py-2 rounded'>Others 2 </p>
          </div>
          <div className='px-1'>
            <p className='border border-outline border-2 py-2 rounded'>Others 4 </p>
          </div>
          <div className='px-1'>
            <p className='border border-outline border-2 py-2 rounded'>Others 5 </p>
          </div>
        </Slider>
        </div>
    )
}

export default Categories
