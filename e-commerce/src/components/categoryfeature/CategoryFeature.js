import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Advantages from '../advantages/Advantages'
import CategorySlide from '../categoryslide/CategorySlide'
import images from '../../components/categoryslide/images.js'
import advimages from '../../components/advantages/advimages.js'

const CategoryFeature = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <CategorySlide images={images} discount="-22%" />
          </Col>
          <Col md={6}>
            <Advantages title="Low cost shipping" advimages={advimages} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CategoryFeature
