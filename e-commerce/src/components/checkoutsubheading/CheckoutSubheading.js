import React from 'react'
import '../checkoutsubheading/CheckoutSubheading.css'
import { Container, Row, Col } from 'react-bootstrap'

const CheckoutSubheading = ({ title }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="subheading">{title}</div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CheckoutSubheading
