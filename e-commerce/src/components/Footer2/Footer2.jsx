import React from 'react'
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import { BsCart4 } from 'react-icons/bs'
import { BiHome } from 'react-icons/bi'
import { FiHelpCircle } from 'react-icons/fi'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { TbApple } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import logo from '../../images/logoAlone.png';
import logoText from '../../images/logoText.png';


import './footer2.css'

const Footer2 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
  }, [])
  return (
    <div>
      <section
        class="d-flex justify-content-between p-4"
        style={{ backgroundColor: '#FF7E07' }}
      >
        <div class="me-5 text-white">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="social-container">
          <a href="https://youtube.com" className="nav-link px-2 text-white">
            <FaYoutube />
          </a>

          <a href="https://facebook.com" className="nav-link px-2 text-white">
            <FaFacebookF />
          </a>

          <a href="https://instagram.com" className="nav-link px-2 text-white">
            <FaInstagram />
          </a>

          <a href="https://twitter.com" className="nav-link px-2 text-white">
            <FaTwitter />
          </a>

          <a href="https://twitter.com" className="nav-link px-2 text-white">
            <FaLinkedin />
          </a>
        </div>
      </section>
      <footer className="w-100 py-4 flex-shrink-0 pink-background">
        <div className="list">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
            <img src={logo} alt='' className="footer-logo" />
            <img src={logoText} alt='' className="footer-logo-text"/>

            <p style={{color: "#565956", fontStyle: "italics"}}>
              ... quality, affordable and fresh; plus jara
            </p>
          </div>
          <div className="mobile-footer-details">
            <ul id="overview">
              <h3>Overview</h3>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: '60px',
                  backgroundColor: '#7c4dff',
                  height: '2px',
                }}
              />
              <li>
                <Link
                  to="/"
                  style={{ textDecoration: 'none', color: '#565956' }}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
                  }}
                >
                  <BiHome /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  style={{ textDecoration: 'none', color: '#565956' }}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
                  }}
                >
                  <TbApple /> Products
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  style={{ textDecoration: 'none', color: '#565956' }}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
                  }}
                >
                  <MdOutlineAccountCircle /> Account
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{ textDecoration: 'none', color: '#565956' }}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
                  }}
                >
                  <FiHelpCircle /> Help
                </Link>
              </li>
              <li>
                <Link
                  to="/cartpage"
                  style={{ textDecoration: 'none', color: '#565956' }}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
                  }}
                >
                  <BsCart4 /> Cart
                </Link>
              </li>
            </ul>
            <ul id="connect">
              <h3>Connect</h3>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: '60px',
                  backgroundColor: '#7c4dff',
                  height: '2px',
                }}
              />
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <ul id="company">
            <h3>Team</h3>
            <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style={{
                width: '60px',
                backgroundColor: '#7c4dff',
                height: '2px',
              }}
            />
            <li>Abdulkadir Kamaldeen: Deenabdulkadir@gmail.com​</li>
            <li>Agoro Hakeem: omotagoro@gmail.com</li>
            <li>Ogiri Moses: ogirimoses@gmail.com</li>
            <li>Okunsebor Joan: jokunsebor@gmail.com</li>
            <li>Olayode Oluwafemi: oludareoluwafemirachael@gmail.com</li>
            <li>Onajinrin Oluwakemi: oluwakemi.mabell@gmail.com</li>
            <li>Shobande James: shobandejames@gmail.com</li>
            <li>Sodiq Farihan A: farhansodiq360@gmail.com</li>
            <li>Ugochukwu Chidubanyi: chidu302@gmail.com</li>
          </ul>
        </div>
        {/* <div style={{padding: "20px", textAlign: "center"}}>
            <p >
              If you are visually-impaired and having difficulty with our website,
              call us at{" "}
            </p>
            <p >
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
        </div> */}
      </footer>

      <footer
        className="w-100 py-4 flex-shrink-0 text-white"
        style={{ backgroundColor: '#FF7E07', height: '9vh' }}
      >
        <p className="rights">All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer2
