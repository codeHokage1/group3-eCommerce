import React from 'react'
import { Card } from 'react-bootstrap'
import '../advantages/Advantages.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Advantages = ({ advimages, title }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrow: false,
  }
  return (
    <Slider {...settings}>
      {advimages.map((item) => {
        return (
          <Card className="advantages" key={item.id}>
            <img src={item.src} />
            <p className="advtext">{title}</p>
          </Card>
        )
      })}
    </Slider>
  )
}

export default Advantages
