import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../addressdetails/AddressDetails.css'

const AddressDetails = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="customerdiv">
              <p className="customername">Farhan Sodiq</p>
              <p>Araromi Street, Mushin Road, No 16B Lagos</p>
              <p>+23490306030</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddressDetails
