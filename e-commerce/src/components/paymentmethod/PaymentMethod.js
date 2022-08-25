import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../../components/paymentmethod/PaymentMethod.css'
import PaystackPop from '@paystack/inline-js'
import { Link, useNavigate } from 'react-router-dom'

const PaymentMethod = ({ cartTotalPrice, cartItems, firstname, lastname, phone, address, delivery, payment, email }) => {
  // const [email, setEmail] = useState('')
  const amount = cartTotalPrice
  // const [firstname, setFirstname] = useState('')
  // const [lastname, setLastname] = useState('')
  // const [phone, setPhone] = useState('')
  // const [address, setAddress] = useState('')

  // const [delivery, setDelivery] = useState('')
  // const [payment, setPayment] = useState('')



 const navigate = useNavigate()


  const paywithpaystack = (e) => {
    e.preventDefault()
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: 'pk_test_28f29fde6150495c2dfdfea909fb5ca2aaa22a40',
      amount: amount * 100,
      email,
      firstname,
      lastname,
      phone,
      address,
      onSuccess(transaction) {
        // Payment complete! Reference: transaction.reference
        let message = `Payment Complete! Reference ${transaction.reference}`
        console.log(message)
        navigate('/delivery')
        // setEmail('')
        // setFirstname('')
        // setLastname('')
        // setPhone('')
        // setAddress('')

        console.log(cartItems)
      },
      onCancel() {
        // user closed popup
        console.log('canceled a transaction')
        navigate('/products')
      },
    })
  }

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-5 mb-5">
          <Col xs lg="6">
            <Form>
              <p>Total Price: {cartTotalPrice}</p>
              {/* <label htmlFor="payment-option"><strong>Choose Payment Option:</strong></label> <br />
                <input style={{width: "20px"}} type='radio' value='on-delivery' id="payment-option" name="payment" onClick={e => setPayment(e.target.value)}/> Pay on Delivery
                <input style={{width: "20px"}} type='radio' value='online' id="payment-option" name="payment" onClick={e => setPayment(e.target.value)}/> Online Payment <br />

              <label htmlFor="delivery-option"><strong>Choose Delivery Option:</strong></label> <br />
              <input style={{width: "20px"}} type='radio' value='door-delivery' id="delivery-option" name="delivery" onClick={e => setDelivery(e.target.value)}/> Door Delivery 
              <input style={{width: "20px"}} type='radio' value='pick-up' id="delivery-option" name="delivery" onClick={e => setDelivery(e.target.value)}/> Pick Up <br /> */}
              {/* <Form.Group className="formm" controlId="formBasicEmail"> */}
                {/* <Form.Label className="pb-0 mb-0">First Name</Form.Label>
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
              <Form.Group className="formm" controlId="formBasicEmail">
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

              <Form.Group className="formm" controlId="formBasicEmail">
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

              <Form.Group className="formm" controlId="formBasicPassword">
                <Form.Label className="pb-0 mb-0">Phone no</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="08137422773"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="formm" controlId="formBasicPassword">
                <Form.Label className="pb-0 mb-0">Delivery address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="41/43 Industrial Avenue Sabo Yaba, Lagos"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
 */           }
              
              {
                payment === "online" ? (
                                        <Button
                                          className="paybtn"
                                          variant="success"
                                          type="submit"
                                          onClick={paywithpaystack}
                                        >
                                          Proceed Payment
                                        </Button>
                                      ) : (
                                          <Button
                                            className="paybtn"
                                            variant="success"
                                            type="submit"
                                            onClick={() => {navigate('/delivery'); console.log(cartItems)}}
                                          >
                                            Proceed to Delivery Tracking
                                          </Button>
                                        )
              }
              
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PaymentMethod
