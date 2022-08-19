import React from 'react'
import '../foodcontainer/FoodContainer.css'
import FoodItem from '../fooditem/FoodItem'
import { Container, Row, Col } from 'react-bootstrap'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import itemten from '../../images/beef.png'
import itemele from '../../images/pork.png'
import itemtwlve from '../../images/titus.png'
import itemthirteen from '../../images/chickentwo.png'
import itemfourteen from '../../images/chickenthree.png'
import itemfivteen from '../../images/wholebread.png'
import itemsixteen from '../../images/wheatbread.png'
import itemseventeen from '../../images/buns.png'
import itemeighteen from '../../images/flour.png'
import itemnineteen from '../../images/baguet.png'

const BeverageSnack = ({ title }) => {
  let ref = React.createRef()
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset
  }
  return (
    <div className="bg-linear">
      <Container>
        <Row>
          <Col>
            <p className="fruitheading">{title}</p>
          </Col>
        </Row>
        <div className="fooditems" ref={ref}>
          <FoodItem
            discount="-30%"
            img={itemfivteen}
            name="Green Broccoli"
            price="N7,500"
            discountprice="N750"
          />

          <FoodItem
            discount="-50%"
            img={itemsixteen}
            name="Cucumber"
            price="N5,000"
            discountprice="N500"
          />
          <FoodItem
            discount="-20%"
            img={itemseventeen}
            name="Green Veges"
            price="N5300"
            discountprice="N530"
          />
          <FoodItem
            discount="-15%"
            img={itemnineteen}
            name="Papaya"
            price="N7000"
            discountprice="N700"
          />
          <FoodItem
            discount="-15%"
            img={itemeighteen}
            name="Papaya"
            price="N7000"
            discountprice="N700"
          />
          <FoodItem
            discount="-32%"
            img={itemten}
            name="Beef"
            price="N11,000"
            discountprice="N1,100"
          />
          <FoodItem
            discount="-20%"
            img={itemele}
            name="Pork"
            price="N9,200"
            discountprice="N920"
          />
          <FoodItem
            discount="-40%"
            img={itemtwlve}
            name="Tilapia"
            price="N6,900"
            discountprice="N690"
          />
          <FoodItem
            discount="-11%"
            img={itemthirteen}
            name="Live cock"
            price="N18,700"
            discountprice="N1200"
          />
          <FoodItem
            discount="-16%"
            img={itemfourteen}
            name="Broiler"
            price="N12,000"
            discountprice="N1200"
          />
        </div>

        <div className="scrollpane">
          <button className="leftclick arrowbtn" onClick={() => scroll(-254)}>
            <FiChevronLeft />
          </button>
          <button className="rightclick arrowbtn" onClick={() => scroll(254)}>
            <FiChevronRight />
          </button>
        </div>
      </Container>
    </div>
  )
}

export default BeverageSnack
