import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../../components/paymentmethod/PaymentMethod.css'
import PaystackPop from '@paystack/inline-js'
import { Link, useNavigate } from 'react-router-dom'

const PaymentMethod = ({ cartTotalPrice, cartItems, firstname, lastname, phone, address, delivery, payment, email }) => {
  // const [email, setEmail] = useState('')
  const amount = cartTotalPrice;
  const navigate = useNavigate()
  // const [firstname, setFirstname] = useState('')
  // const [lastname, setLastname] = useState('')
  // const [phone, setPhone] = useState('')
  // const [address, setAddress] = useState('')

  // const [delivery, setDelivery] = useState('')
  // const [payment, setPayment] = useState('')
console.log(cartItems[0])

// cartItems.map(item => {
//     const itemToSend ={
//       id: item.id,
//     category: item.category,
//     name: item.name,
//     description: item.description,
//     discount: item.discount,
//     price: item.price.toString(),
//     qty: item.qty.toString()
//   };
//   const sendToCartApi = async () => {
//     const postOption = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(itemToSend)
//     }
//     const response = await fetch("https://localhost:7297/api/Order/CreateOrder", postOption)
//     const res = await response.json()
//     console.log(res)

//   };
// })

const handleSendCartItem = () => {

  console.log(cartItems); 
  const sendToCartApi = async (item) => {
    const postOption = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item)
    }
    const response = await fetch("https://localhost:7297/api/Order/CreateOrder", postOption)
    const res = await response.json()
    console.log(res)
  
  };

  cartItems.map(item => {
    const itemToSend ={
      id: item.id,
    category: item.category,
    name: item.name,
    description: item.description,
    discount: item.discount,
    price: item.price.toString(),
    qty: item.qty.toString()
  };
  sendToCartApi(itemToSend)
  });

  navigate('/delivery'); 

}

// const itemToSend ={
//     id: cartItems[0].id,
//   category: cartItems[0].category,
//   name: cartItems[0].name,
//   description: cartItems[0].description,
//   discount: cartItems[0].discount,
//   price: cartItems[0].price.toString(),
//   qty: cartItems[0].qty.toString()
// }

//   const navigate = useNavigate()

//   const sendToCartApi = async () => {
//     const postOption = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(itemToSend)
//     }
//     const response = await fetch("https://localhost:7297/api/Order/CreateOrder", postOption)
//     const res = await response.json()
//     console.log(res)

//   };

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
            <form>
              <p className=''>Total Price: {cartTotalPrice}</p>
              <label htmlFor="payment-option"><strong>Choose Payment Option:</strong></label> <br />
              <input style={{ width: "20px", position: "relative", top: "15px" }} type='radio' value='on-delivery' id="payment-option" name="payment" /> Pay on Delivery
              <input style={{ width: "20px", position: "relative", top: "15px" }} type='radio' value='online' id="payment-option" name="payment" /> Online Payment <br />

              <label htmlFor="delivery-option"><strong>Choose Delivery Option:</strong></label> <br />
              <input style={{ width: "20px", position: "relative", top: "15px" }} type='radio' value='door-delivery' id="delivery-option" name="delivery" /> Door Delivery
              <input style={{ width: "20px", position: "relative", top: "15px" }} type='radio' value='pick-up' id="delivery-option" name="delivery" /> Pick Up <br />


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
                    onClick={handleSendCartItem}
                  >
                    Proceed to Delivery Tracking
                  </Button>
                )
              }
            </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PaymentMethod


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