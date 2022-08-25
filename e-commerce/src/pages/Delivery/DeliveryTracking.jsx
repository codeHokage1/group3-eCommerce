import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './delivery.css';
import { FaLeaf } from 'react-icons/fa';
import { BiLoaderCircle } from 'react-icons/bi';
import { IoCheckmarkDoneCircleOutline as Done } from 'react-icons/io5';




const DeliveryTracking = () => {
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
                                      <li className='order-content'>Rice := 2 bags</li>
                                      <li className='order-content'>Vegetable Oil := 2.5 litres</li>
                                      
                                    </ul>
                                </div>
                                <div className='order-row'>
                                    <p className='order-flag'>Total Price: </p>
                                    <p className='order-content'>N <span  className='order-content'>25,000</span></p>
                                </div>
                                <div className='order-row'>
                                    <p className='order-flag'>Payment Status: </p>
                                    <p className='order-content'>Paid</p>
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
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Order #1-B333</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
         </Accordion>
         </div>
    </main>
  )
}

export default DeliveryTracking



