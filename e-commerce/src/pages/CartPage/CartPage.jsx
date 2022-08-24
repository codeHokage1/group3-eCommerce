import React from 'react'
import './cartpage.css'
import beef2 from '../../images/beef2.png'
import { BsCart4 } from 'react-icons/bs'
import FrozenFood from '../../components/frozenfood/FrozenFood'
import BeverageSnack from '../../components/beveragesnack/BeverageSnack'

import { Link } from 'react-router-dom'

const CartPage = ({ cartItems, handleAdd, handleRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const taxPrice = itemsPrice * 0.14
  const shippingPrice = itemsPrice > 2000 ? 0 : 20
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  return (
    <div>
      <header className="w-100 py-4 flex-shrink-0 bg-dark text-white">
        <div className="container ">
          <h3 className="nav justify-content-center">
            {' '}
            <BsCart4 /> CART{' '}
          </h3>
        </div>
      </header>
      <div className="container-one ">
        <div className="py-4 container w-90 px-0">
          <div className="row">
            {cartItems.length === 0 ? (
              <p>Your cart is currently empty. Start placing your orders</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div className="col-sm-6 mt-2">
                    <div className="card py-4 px-2">
                      <div className="row">
                        <div className="col-sm-6">
                          <img
                            src={item.image}
                            class="img-fluid image px-4"
                            alt=""
                          />
                          <div className="clearfix">
                            <p className="markettitle">Remove</p>
                          </div>
                        </div>

                        <div className="col-sm-6 px-5">
                          <h4 className="fw-bolder text-dark pb-1">
                            {item.name}
                          </h4>
                          <h5 className="fw-bolder pb-1">
                            Quantity: {item.qty} kilos
                          </h5>
                          <h4 className="fw-bolder text-dark">N{item.price}</h4>
                          <p className="discountbadge"> -20% </p>
                          <p className="card-text">
                            <s>N5,500</s>{' '}
                          </p>
                          <p>
                            <button
                              className="add-button"
                              onClick={() => handleAdd(item)}
                            >
                              {' '}
                              +{' '}
                            </button>
                            <span className="proprice"> {item.qty}</span>

                            <button
                              className="add-button"
                              onClick={() => handleRemove(item)}
                            >
                              {' '}
                              -{' '}
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {cartItems.length === 0 ? (
        ' '
      ) : (
        <div className="container two">
          <h3 className="p-3">Cart summary</h3>

          <hr />
          <div className="price-row">
            <p className="price-title">Items Price: </p>
            <p>N {itemsPrice.toFixed(2)}</p>
          </div>
          <div className="price-row">
            <p className="price-title">Tax Price: </p>
            <p>N {taxPrice.toFixed(2)}</p>
          </div>
          <div className="price-row">
            <p className="price-title">Shipping Price: </p>
            <p>N {shippingPrice.toFixed(2)}</p>
          </div>
          <div className="price-row">
            <p className="price-title">
              <strong>Total Price: </strong>
            </p>
            <p>
              <strong>N {totalPrice.toFixed(2)}</strong>
            </p>
          </div>
          <hr />

          <Link to="/checkout">
            <button
              className="checkout-button p-2 price-amount"
              style={{ height: '50px' }}
            >
              N {totalPrice.toFixed(2)}: CHECK OUT{' '}
            </button>
          </Link>
        </div>
      )}

      <FrozenFood title="Frozen Food" />
      {/* <FoodContainer title="Food items" /> */}
      <BeverageSnack title="Beverages and Snacks" />
    </div>
  )
}

export default CartPage
