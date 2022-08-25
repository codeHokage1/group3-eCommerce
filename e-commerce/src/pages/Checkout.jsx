import React from 'react'
import AddressDetails from '../components/addressdetails/AddressDetails'
import CheckoutHeading from '../components/checkoutheading/CheckoutHeading'
import CheckoutSubheading from '../components/checkoutsubheading/CheckoutSubheading'
import DeliveryMethod from '../components/deliverymethod/DeliveryMethod'
import PaymentMethod from '../components/paymentmethod/PaymentMethod'

const Checkout = ({ cartTotalPrice, regName, cartItems}) => {

  return (
    <div className="mt-5 below-header">
      <CheckoutHeading heading="checkout" />
      <CheckoutSubheading title="Delivery method"></CheckoutSubheading>
      <DeliveryMethod />
      <CheckoutSubheading title="Delivery details"></CheckoutSubheading>
      <AddressDetails regName={regName}/>
      <CheckoutSubheading title="Billing details"></CheckoutSubheading>
      <PaymentMethod cartTotalPrice={cartTotalPrice} cartItems={cartItems} />
    </div>
  )
}

export default Checkout
