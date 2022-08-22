import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../deliverymethod/DeliveryMethod.css'
import deliveryman from '../../images/delivery-man.png'
import location from '../../images/location.png'
import hand from '../../images/handtwo.png'

const DeliveryMethod = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <div>
            <hr />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="deliverydeal">
          <img src={deliveryman} />
          <h6 className="font-weight-bold">Door Delivery</h6>
          <p>Delivery N800. Delivery by weekend within the next 24hrs 20mins</p>
        </Col>
        <Col className="deliverydeal">
          <img src={location} />
          <h6 className="font-weight-bold">Door Delivery</h6>
          <p>Delivery N800. Delivery by weekend within the next 24hrs 20mins</p>
        </Col>
        <Col className="deliverydeal">
          <img src={hand} />
          <h6 className="font-weight-bold">Door Delivery</h6>
          <p>Delivery N800. Delivery by weekend within the next 24hrs 20mins</p>
        </Col>
      </Row>
    </Container>
  )
}

export default DeliveryMethod
