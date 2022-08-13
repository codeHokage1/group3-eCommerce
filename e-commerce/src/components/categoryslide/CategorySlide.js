import React from 'react'
import chicken from '../../images/chicken.png'
import { Card } from 'react-bootstrap'
import '../categoryslide/CategorySlide.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CategorySlide = ({ images }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
    <div>
      <Slider {...settings}>
        {images.map((item) => {
          return (
            <Card className="categoryCard" key={item.id}>
              <div className="discountdiv">
                <p className="discountbadge">-22%</p>
              </div>

              <div className="catDiv">
                <img src={item.src} alt={item.alt} />
              </div>
              <div className="navandname">
                <div className="sliderdiv">hello</div>

                <div className="catname">Poultry bird</div>
              </div>
            </Card>
          )
        })}
      </Slider>
    </div>
  )
}

export default CategorySlide
