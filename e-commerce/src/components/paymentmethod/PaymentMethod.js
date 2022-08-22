import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../../components/paymentmethod/PaymentMethod.css'
import { usePaystackPayment } from 'react-paystack'

const PaymentMethod = () => {
  const config = {
    reference: new Date().getTime().toString(),
    email: 'user@example.com',
    amount: 20000,
    publicKey: 'pk_test_28f29fde6150495c2dfdfea909fb5ca2aaa22a40',
  }
  const initializePayment = usePaystackPayment(config)
  const onSuccess = (reference) => {
    console.log(reference)
  }

  const onClose = () => {
    console.log('closed')
  }

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-5 mb-5">
          <Col xs lg="6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="pb-0 mb-0">Name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" />
                <Form.Text className="text-muted">
                  Your prefered delivery name
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="pb-0 mb-0">Email address</Form.Label>
                <Form.Control type="email" placeholder="johndoe@mail.com" />
                <Form.Text className="text-muted">
                  your prefered email address
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="pb-0 mb-0">Phone no</Form.Label>
                <Form.Control type="text" placeholder="08137422773" />
              </Form.Group>

              <Button className="paybtn" variant="success">
                Proceed Payment
              </Button>

              <button
                onClick={() => {
                  initializePayment(onSuccess, onClose)
                }}
              >
                Paystack Hooks Implementation
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PaymentMethod
