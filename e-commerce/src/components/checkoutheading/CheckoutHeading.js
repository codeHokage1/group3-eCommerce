import React from 'react'
import '../../components/checkoutheading/CheckoutHeading.css'
import { Container, Row, Col } from 'react-bootstrap'

const CheckoutHeading = ({ heading }) => {
  return (
    <Container>
      <Row>
        <Col>
          <p className="checkhead">{heading}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckoutHeading
