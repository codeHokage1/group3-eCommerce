import React from "react";
import Delivery from "../images/images-checkout/delivery-man.png";
import Hand from "../images/images-checkout/hand.png";
import Location from "../images/images-checkout/location.png";
import Mastercard from "../images/images-checkout/mastercard.png";
import Paypal from "../images/images-checkout/paypal.png";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="container-fluid">
      <p className="checkoutp">CHECKOUT</p>

      <nav className="navbar addressDetails">
        <p className="text-white addressp">ADDRESS DETAILS</p>
      </nav>

      <section className="container-fluid sectionAddress text-center">
        <p className="farhanText">Farhan Sodiq</p>
        <p>Araromi Street, Mushin Road, No 16B Lagos</p>
        <p className="text">+23490306030</p>
      </section>

      <nav className="navbar addressDetails">
        <p className="text-white addressp">DELIVERY METHOD</p>
      </nav>

      <div className="container-fluid sectionAddress">
        <div className="dash container"></div>
        <div className="row deliveryMethod">
          <div className="col mt-3 text-center deliverBorder">
            <img src={Delivery} alt="" />
            <h4 className="fw-bold">Door Delivery</h4>
            <p>
              Delivery N800. Delivery
              <br /> by weekend within the
              <br /> next 24hrs 20mins
            </p>
          </div>
          <div className="col mt-3 text-center deliverBorder">
            <img src={Location} alt="" />
            <h4 className="fw-bold">Pickup Station</h4>
            <p>
              Delivery N600. Pickup by
              <br /> by weekend within the
              <br /> next 24hrs 20mins
            </p>
          </div>
          <div className="col mt-3 text-center ">
            <img src={Hand} alt="" />
            <h4 className="fw-bold">Return Policy</h4>
            <p>
              Free return within 15
              <br /> days
              <br /> of edible items.
            </p>
          </div>
        </div>
      </div>

      <nav className="navbar addressDetails mt-1 mb-2">
        <p className="text-white addressp">PAYMENT METHOD</p>
      </nav>

      <div className="container-fluid sectionPayment">
        <div className="formcontainer container bg-white d-flex justify-content-center">
          <form className="container form ">
            <div className="d-flex justify-content-center creditcard row">
              <button className="btn mastercard fw-bold col">
                <img className="img" src={Mastercard} alt="" /> MasterCard
              </button>
              <button className="btn paypal fw-bold col">
                <img className="img" src={Paypal} alt="" />
                PayPal
              </button>
              <button className="btn cash fw-bold col">Cash on Delivery</button>
            </div>
            <div className="mb-3 mt-3">
              <h2>Credit Card Info</h2>
            </div>

            <div>
              <div className="form-group formMargin">
                <label htmlFor="cardholder">Cardholder's Name: </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardholder"
                  placeholder="Enter your card name"
                />
              </div>
              <div className="form-group formMargin">
                <label htmlFor="cardnumber">Card Number: </label>
                <input
                  type="number"
                  className="form-control"
                  id="cardnumber"
                  placeholder="Enter your card number"
                />
              </div>
            </div>

            <div className="row formMargin">
              <div className="col">
                <label htmlFor="expYear">Exp. Year</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col">
                <label htmlFor="expMonth">Exp. Month</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="form-group formMargin">
              <label htmlFor="cvcNumber">CVC Nunber:</label>
              <input
                type="number"
                className="form-control"
                id="cvcNumber"
                placeholder="xxx"
              />
            </div>
            <button type="submit" className="btn submit">
              Proceed payment
            </button>
          </form>
        </div>
      </div>

      <div className="navbar confrimOrderDetails mx-auto">
        <button className="text-white confrimOrder mx-auto">
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};

export default Checkout;
