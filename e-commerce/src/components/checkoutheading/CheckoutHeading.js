import React from 'react'
import '../../components/checkoutheading/CheckoutHeading.css'
import { Container, Row, Col } from 'react-bootstrap'

const CheckoutHeading = ({ heading }) => {
  return (
    <Container className="mt-5">
      <Row className="mt-5">
        <Col className="mt-5">
          <p className="checkhead">{heading}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckoutHeading
