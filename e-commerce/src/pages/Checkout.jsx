import React from 'react'
import AddressDetails from '../components/addressdetails/AddressDetails'
import CheckoutHeading from '../components/checkoutheading/CheckoutHeading'
import CheckoutSubheading from '../components/checkoutsubheading/CheckoutSubheading'
import DeliveryMethod from '../components/deliverymethod/DeliveryMethod'
import PaymentMethod from '../components/paymentmethod/PaymentMethod'

const Checkout = ({ cartTotalPrice, regName, setRegName, regEmail, setRegEmail, delivery, setDelivery, payment, setPayment, phone, address, setPhone, setAddress}) => {

  return (
    <div className="mt-5 below-header">
      <CheckoutHeading heading="checkout" />
      <CheckoutSubheading title="Delivery method"></CheckoutSubheading>
      <DeliveryMethod />
      <CheckoutSubheading title="Delivery details"></CheckoutSubheading>
      <AddressDetails regName={regName}/>
      <CheckoutSubheading title="Billing details"></CheckoutSubheading>
      <PaymentMethod regName={regName} setRegName={setRegName} regEmail={regEmail} setRegEmail={setRegEmail} phone={phone} address={address} setPhone={setPhone} setAddress={setAddress} cartTotalPrice={cartTotalPrice} delivery={delivery} setDelivery={setDelivery} payment={payment} setPayment={setPayment}/>
    </div>
  )
}

export default Checkout
