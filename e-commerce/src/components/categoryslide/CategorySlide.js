import React from 'react'
import chicken from '../../images/chicken.png'
import { Card } from 'react-bootstrap'
import '../categoryslide/CategorySlide.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CategorySlide = ({ images, title }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow: false,
  }
  return (
    <Slider {...settings}>
      {images.map((item) => {
        return (
          <Card className="categoryCard" key={item.id}>
            <div className="discountdiv">
              <p className="discountbadge db">-22%</p>
            </div>

            <div className="catDiv">
              <img src={item.src} alt={item.alt} className="catimage" />
              {console.log('imag e is ', item.src)}
            </div>
            <div className="navandname">
              <div className="sliderdiv"></div>

              <div className="catname">{item.title}</div>
            </div>
          </Card>
        )
      })}
    </Slider>
  )
}

export default CategorySlide
