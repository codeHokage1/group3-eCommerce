import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../../components/paymentmethod/PaymentMethod.css'
import PaystackPop from '@paystack/inline-js'

const PaymentMethod = () => {
  const [email, setEmail] = useState('')
  const amount = 200000
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')

  const paywithpaystack = (e) => {
    e.preventDefault()
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: 'pk_test_28f29fde6150495c2dfdfea909fb5ca2aaa22a40',
      amount: amount,
      email,
      firstname,
      lastname,
    })
  }

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-5 mb-5">
          <Col xs lg="6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="pb-0 mb-0">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Your prefered delivery first name
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="pb-0 mb-0">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Doe"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Your prefered delivery last name
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="pb-0 mb-0">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="johndoe@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  your prefered email address
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="pb-0 mb-0">Phone no</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="08137422773"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              <Button
                className="paybtn"
                variant="success"
                type="submit"
                onClick={paywithpaystack}
              >
                Proceed Payment
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PaymentMethod
