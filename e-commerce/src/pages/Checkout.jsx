import React from 'react'
import AddressDetails from '../components/addressdetails/AddressDetails'
import CheckoutHeading from '../components/checkoutheading/CheckoutHeading'
import CheckoutSubheading from '../components/checkoutsubheading/CheckoutSubheading'
import DeliveryMethod from '../components/deliverymethod/DeliveryMethod'

const Checkout = () => {
  return (
    <div>
      <CheckoutHeading heading="checkout" />
      <CheckoutSubheading title="Address details"></CheckoutSubheading>
      <AddressDetails />
      <CheckoutSubheading title="Delivery method"></CheckoutSubheading>
      <DeliveryMethod />
    </div>
  )
}

export default Checkout
