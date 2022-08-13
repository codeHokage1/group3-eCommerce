import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Advantages from '../advantages/Advantages'
import CategorySlide from '../categoryslide/CategorySlide'
import images from '../../components/categoryslide/images'

const CategoryFeature = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CategorySlide images={images} />
          </Col>
          <Col>
            <Advantages />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CategoryFeature
