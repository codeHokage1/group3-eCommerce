import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './delivery.css';
import { FaLeaf } from 'react-icons/fa';
import { BiLoaderCircle } from 'react-icons/bi';
import { IoCheckmarkDoneCircleOutline as Done } from 'react-icons/io5';
import numeral from 'numeral'



const DeliveryTracking = ({cartItems, cartTotalPrice, regName, regEmail, phone, address, payment}) => {
  return (
    <main className='tracking mt-5'>
        <div className='track-container mt-5'>
        <h1>Track Your Orders</h1>
        <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className="order-container">
                        <Accordion.Header className="order-header">Order #1-A2</Accordion.Header>
                        <Accordion.Body>
                            <div className='order-body'>
                                <div className='order-row'>
                                    <p className='order-flag'>Items in order: </p>
                                    <ul>
                                      {
                                        cartItems.map((item) => (
                                          <li key={item.id} className='order-content' >{item.name} := {item.qty}</li>
                                        ))
                                      }
                                      {/* <li className='order-content'>Rice := 2 bags</li>
                                      <li className='order-content'>Vegetable Oil := 2.5 litres</li> */}                                      
                                    </ul>
                                </div>
                                <div className='order-row'>
                                    <p className='order-flag'>Total Price: </p>
                                    <p className='order-content'>N <span  className='order-content'>{numeral(cartTotalPrice).format('0,0.000')}</span></p>
                                </div>
                                <div className='order-row'>
                                    <p className='order-flag'>Payment Status: </p>
                                    <p className='order-content'>{payment === "online" ? "Paid" : "Pay On Delivery"}</p>
                                </div>
                                <div>
                                    <p className='order-flag'>Delivery Status: </p>
                                    <ul className='delivery-status'>
                                      <div className='order-row'>
                                        <li className="stat-title order-content"><FaLeaf />{"  "}Packed</li>
                                        <Done className='condition' />
                                      </div>
                                      <div className='order-row'>
                                        <li className="stat-title order-content"><FaLeaf />{"  "}Out for Delivery</li>
                                        <BiLoaderCircle className='condition'/>
                                      </div>
                                      <div className='order-row'>
                                        <li className="stat-title order-content"><FaLeaf />{"  "}Delivered</li>
                                        <BiLoaderCircle className='condition' />
                                      </div>
                                  </ul>
                                </div>
                                <div>
                                    <p className='order-flag'>Delivery Details: </p>
                                    
                                    <div className='order-row'>
                                        <li className="stat-title order-content">Name: </li>
                                        <p className='order-content'>{regName}</p>
                                    </div>
                                    <div className='order-row'>
                                        <li className="stat-title order-content">Phone:  </li>
                                        <p className='order-content'>{phone}</p>
                                    </div>
                                    <div className='order-row'>
                                        <li className="stat-title order-content">Address: </li>
                                        <p className='order-content'>{address}</p>
                                    </div>                                
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
         </Accordion>
         </div>
    </main>
  )
}

export default DeliveryTracking



