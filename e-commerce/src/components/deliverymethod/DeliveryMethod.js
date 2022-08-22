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
        <Col xs lg="8">
          <div>
            <hr />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-5">
        <Col className="deliverydeal border-end border-dark">
          <div className="deliveryservice">
            <img src={deliveryman} />
            <h6 className="bold-weight">Door Delivery</h6>
            <p>
              Delivery N800. Delivery by weekend within the next 24hrs 20mins
            </p>
          </div>
        </Col>
        <Col className="deliverydeal border-end border-dark">
          <div className="deliveryservice">
            <img src={location} />
            <h6 className="bold-weight">Pickup station</h6>
            <p>
              Delivery N800. Delivery by weekend within the next 24hrs 20mins
            </p>
          </div>
        </Col>
        <Col className="deliverydeal">
          <div className="deliveryservice">
            <img src={hand} />
            <h6 className="bold-weight">Return policy</h6>
            <p>
              Delivery N800. Delivery by weekend within the next 24hrs 20mins
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default DeliveryMethod
