import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavAndHero = () => {
  return (
    <div>
      <div className='hero'>
        <section className='hero-content'>
          <h1>Affordable <br /> Produce from <br /> local markets</h1>
          <p>
            All you need to eat to stay healthy and fresh.
            Your locally harvested veggies and <br/> spices are all made available for you.
            Fast delivery for wholesale and consumables.
          </p>
          <div className='hero-buttons'>
            <button className='hero-button hero-button1'>Get Started</button>
            <button className='hero-button hero-button2'>Sign In</button>
          </div>
        </section>

      </div>
    </div>
  )
}

export default NavAndHero