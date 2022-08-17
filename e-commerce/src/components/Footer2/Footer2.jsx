import React from 'react';
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer2 = () => {
  return (
      <div>
          <footer className="w-100 py-4 flex-shrink-0 pink-background">
        <div className="container">
          <ul className="nav justify-content-center border-bottom border-dark pb-3 mb-3">
            <li className="nav-item">
              <a href="https://youtube.com" className="nav-link px-2 text-dark">
                <FaYoutube />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://facebook.com" className="nav-link px-2 text-dark">
                <FaFacebookF />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://instagram.com" className="nav-link px-2 text-dark">
                <FaInstagram />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://twitter.com" className="nav-link px-2 text-dark">
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
  )
}

export default Footer2