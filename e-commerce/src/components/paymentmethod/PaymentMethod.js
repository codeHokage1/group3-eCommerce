import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../../components/paymentmethod/PaymentMethod.css'
import PaystackPop from '@paystack/inline-js'
import { Link, useNavigate } from 'react-router-dom'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PaymentMethod = ({ cartTotalPrice, regName, setRegName, regEmail, setRegEmail, delivery, setDelivery, payment, setPayment, phone, address, setPhone, setAddress, isLoggedIn }) => {

  const notifyReceipt = () => toast.success("Thank you! A recipt has been sent to your provide email adress");
  const amount = cartTotalPrice

 const navigate = useNavigate()


  const paywithpaystack = (e) => {
    e.preventDefault()
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: 'pk_test_28f29fde6150495c2dfdfea909fb5ca2aaa22a40',
      amount: amount * 100,
      email: regEmail,
      // phone,
      // address,
      onSuccess(transaction) {
        // Payment complete! Reference: transaction.reference
        let message = `Payment Complete! Reference ${transaction.reference}`
        console.log(message)
        localStorage.removeItem("cartItems");
        navigate('/delivery')
        var templateParams = {
          from_name: "JaraDey",
          to_name: regEmail,
          message:
            "Hi " +
            regName +
            `Thank your shoppin with JaraDey. Kindly find the transaction reference below. We also didnt forget to add Jara for you ;). Transaction Reference: ${transaction.reference}`,
        };
      
        emailjs
          .send(
            "service_53tc4hr",
            "template_jf9a2if",
            templateParams,
            "j96Zi-XI6EaVaJ9vZ"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              notifyReceipt();
      
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
      

        // console.log(countCartItems)
      },
      onCancel() {
        // user closed popup
        console.log('Canceled a transaction')
        navigate('/products')
      }
    })
  }

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-5 mb-5">
          <Col xs lg="6">
            <Form>
              <p>Total Price: {cartTotalPrice}</p>
              <label htmlFor="payment-option"><strong>Choose Payment Option:</strong></label> <br />
                <input style={{width: "20px"}} type='radio' value='on-delivery' id="payment-option" name="payment" onClick={e => setPayment(e.target.value)}/> Pay on Delivery
                <input style={{width: "20px"}} type='radio' value='online' id="payment-option" name="payment" onClick={e => setPayment(e.target.value)}/> Online Payment <br />

              <label htmlFor="delivery-option"><strong>Choose Delivery Option:</strong></label> <br />
              <input style={{width: "20px"}} type='radio' value='door-delivery' id="delivery-option" name="delivery" onClick={e => setDelivery(e.target.value)}/> Door Delivery 
              <input style={{width: "20px"}} type='radio' value='pick-up' id="delivery-option" name="delivery" onClick={e => setDelivery(e.target.value)}/> Pick Up <br />
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
                                            onClick={() => navigate('/delivery')}
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
