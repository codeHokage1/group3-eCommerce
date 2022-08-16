import React from "react";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import AutoSlide from "./AutoSlide/AutoSlide";
import exchange from "../assets/exchange.jpeg";
import hand from "../assets/hand.png";
import wine from "../assets/wine.png";
import deliveryman from "../assets/delivery-man.png";


const Footer = () => {
  return (
    <div>
      <img
        src={exchange}
        class="img-fluid"
        alt="Responsive image"
      />
      <footer className="w-100 orange-background py-2 text-center">Limited offer: <b>80% FREE </b>today! <u>Terms Apply.</u></footer>
      <footer className="w-100 py-4 flex-shrink-0 ash-color">
        <div className="container w-50 pb-3 mb-3 border-bottom border-dark text-center">
            See Why You Should Trust Us   
          </div >
          <div className="container w-50 text-center d-flex justify-content-around" >
          <div className="border-end border-dark px-5">
          <img className="text-center" src={hand} /><br/>
          <p className="text-center">Up to 30% off the <br/> best organic groceries</p>
          </div>
          <div className="border-end border-dark px-5 ">
          <img src={wine} />
          <p> 1,000+ home <br/> and livestock produce</p>
        </div>
        <div className="px-5"> 
        <img src={deliveryman} />
         <p>  Fast and trackable <br/>delivery system</p>
        </div>
        </div>
        <div className="container w-50 pb-3 mb-3 border-bottom border-dark"></div >
      </footer>
  
      <footer className="w-100 py-4 flex-shrink-0 bg-dark text-white">
        <div className="container pb-3 mb-3">
          <p className="pb-4 mb-3 nav justify-content-center border-bottom border-white fw-bold">
            Customer review
          </p>
          <AutoSlide />
        </div>
      </footer>
      <footer className="bg-light py-4">
        <div className="container nav justify-content-center">
          <button type="button" className="button_primary px-3 py-2">
            Join Today
          </button>
        </div>
      </footer>

      <footer className="w-100 py-4 flex-shrink-0 pink-background">
        <div className="container">
          <ul className="nav justify-content-center border-bottom border-dark pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-dark">
                <FaYoutube />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-dark">
                <FaFacebookF />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-dark">
                <FaInstagram />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-dark">
                <FaTwitter />
              </a>
            </li>
          </ul>

          <p className="nav justify-content-center">
            If you are visually-impaired and having difficulty with our website,
            call us at{" "}
          </p>
          <p className="nav justify-content-center">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </footer>

      <footer className="w-100 py-4 flex-shrink-0 bg-dark text-white">
        <div className="container ">
          <p className="nav justify-content-center">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
