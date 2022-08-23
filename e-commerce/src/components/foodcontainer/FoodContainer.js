/* eslint-disable no-unused-vars */
import React from 'react'
import '../foodcontainer/FoodContainer.css'
import FoodItem from '../fooditem/FoodItem'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import itemone from '../../images/strawberry.png'
import itemtwo from '../../images/broccoli.png'
import itemthree from '../../images/cucumber.png'
import itemfour from '../../images/papaya.png'
import itemfive from '../../images/pepper.png'
import itemsix from '../../images/potato.png'
import itemseven from '../../images/anon-straw.png'
import itemeight from '../../images/tomato.png'
import itemnine from '../../images/vege.png'

const FoodContainer = ({ title }) => {
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
            discount="-12%"
            img={itemone}
            name="Fruit Set"
            price="N8,000"
            discountprice="N800"
          />
          <FoodItem
            discount="-20%"
            img={itemtwo}
            name="Tomato Ball"
            price="N6500"
            discountprice="N650"
          />
          <FoodItem
            discount="-40%"
            img={itemthree}
            name="Chilli Pepper"
            price="N6,000"
            discountprice="N600"
          />
          <FoodItem
            discount="-30%"
            img={itemfour}
            name="Green Broccoli"
            price="N7,500"
            discountprice="N750"
          />
          <FoodItem
            discount="-10%"
            img={itemfive}
            name="Sweet Potato"
            price="N12,000"
            discountprice="N1200"
          />
          <FoodItem
            discount="-50%"
            img={itemsix}
            name="Cucumber"
            price="N5,000"
            discountprice="N500"
          />
          <FoodItem
            discount="-20%"
            img={itemseven}
            name="Green Veges"
            price="N5300"
            discountprice="N530"
          />
          <FoodItem
            discount="-15%"
            img={itemeight}
            name="Papaya"
            price="N7000"
            discountprice="N700"
          />
          <FoodItem
            discount="-22%"
            img={itemnine}
            name="Berry"
            price="N8200"
            discountprice="N820"
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

export default FoodContainer
