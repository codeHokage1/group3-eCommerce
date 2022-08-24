import React, { useEffect } from 'react'
import './cartpage.css'
import beef2 from '../../images/beef2.png'
import { BsCart4 } from 'react-icons/bs'
import FrozenFood from '../../components/frozenfood/FrozenFood'
import BeverageSnack from '../../components/beveragesnack/BeverageSnack'
import StoreHeading from '../../components/storeheading/StoreHeading'
import FruitContainer from '../../components/fruitscontainer/FruitContainer'
import {TbShoppingCartOff as EmptyCart} from 'react-icons/tb'


import { Link, useNavigate } from 'react-router-dom'
import numeral from 'numeral';

const CartPage = ({
  Categoriesdata,
  cartItems,
  handleAdd,
  handleRemove,
  totallyRemove,
  setCartTotalPrice,
  cartTotalPrice,
  isLoggedIn,
  setIsLoggedIn
}) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const taxPrice = itemsPrice * 0.14
  const shippingPrice = itemsPrice > 2000 ? 0 : 20
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const products = []
  Categoriesdata.forEach((category) => {
    category.products.forEach((product) => {
      products.push(product)
    })
  })

  const oneEachProducts = []
  Categoriesdata.forEach((category) => {
    oneEachProducts.push(category.products[3])
  })

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
  }, [])

  const navigate = useNavigate()

  const handleCheckout = () => {
    if (isLoggedIn) {
      window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
      setCartTotalPrice(totalPrice)
      navigate('/checkout')
    } else {
      window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
      navigate('/account')
    }
  }

  useEffect(() => {
    console.log(cartTotalPrice)
  }, [cartTotalPrice])

  return (
    <div>
      <header className="w-100 py-4 flex-shrink-0 bg-dark text-white">
        <div className="container ">
          <h3 className="nav justify-content-center">
            {' '}
            <BsCart4 />{'  '}CART
          </h3>
        </div>
      </header>
      <div className="container-one ">
        <div className="py-4 container w-90 px-0">
          <div>
            {cartItems.length === 0 ? (
                                  <div className="emptycart-container">
                                    <EmptyCart className="empty-cart-logo"/>
                                    <p className="">Your cart is currently empty. Start placing your orders</p>
                                    <Link to='/products'><button className="empty-cart-button">Start Shopping</button></Link>
                                  </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div className="col-sm-6">
                    <div className="card py-4 px-2">
                      <div className="row">
                        <div className="col-sm-6">
                          <img
                            src={item.image}
                            class="img-fluid image px-4"
                            alt=""
                          />
                          <div className="clearfix">
                            <p
                              className="markettitle"
                              onClick={() => totallyRemove(item)}
                            >
                              Remove
                            </p>
                          </div>
                        </div>

                        <div className="col-sm-6 px-5">
                          <h4 className="fw-bolder text-dark pb-3">
                            {item.name}
                          </h4>
                          <h5 className="fw-bolder pb-3">
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
                            {item.qty}
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

          <button
            onClick={handleCheckout}
            className="checkout-button p-2 price-amount"
            style={{ height: '50px' }}
          >
            N {numeral(totalPrice).format('0,0.000')}: CHECK OUT{' '}
          </button>
        </div>
      )}

      <StoreHeading narative="CONTINUE SHOPPING" />
      <FruitContainer
          title="Food Items and More"
          products={oneEachProducts}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          cartItems={cartItems}
      />
      {/* <FrozenFood title="Frozen Food" /> */}
      {/* <FoodContainer title="Food items" /> */}
      {/* <BeverageSnack title="Beverages and Snacks" /> */}
    </div>
  )
}

export default CartPage
