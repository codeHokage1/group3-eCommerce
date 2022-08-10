import React, { useState } from 'react';
import { MdOutlineAccountCircle as UserLogo } from "react-icons/md";
import { FaRegQuestionCircle as HelpLogo } from "react-icons/fa";
import { FaBars } from "react-icons/fa";


import { TbShoppingCart as CartLogo } from "react-icons/tb";
import { BiSearchAlt as SearchLogo } from "react-icons/bi";
import { Link } from 'react-router-dom';

import Offcanvas from 'react-bootstrap/Offcanvas';


const NavBar = () => {

    // const [menuClicked, setMenuClicked] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
        <nav className='navbar'>
            <div className='brandAndLinks'>
                <h1 className='navbar-brand'><Link to='/' className='link'>Group3 Ltd.</Link></h1>
                <ul className='links'>
                    <li><Link to='/account' className='link'><UserLogo /><span className='mobile-remove'>Account</span></Link></li>
                    <li><Link to='/help' className='link'><HelpLogo /><span className='mobile-remove'>Help</span></Link></li>
                    <li><Link to='/cart' className='link'><CartLogo /><span className='mobile-remove'>Cart</span></Link></li>
                </ul>
            </div>
            <div className='search'>
                <form onSubmit={e => e.preventDefault()}>
                        <button className="search-button"><SearchLogo /></button>
                        <input type="text" placeholder='Search for products, stores and categories' className='search-input'/>
              </form>
              <div>
                  <FaBars className='menu-button' onClick={handleShow}/>
              </div>             
          </div>

          <Offcanvas show={show} onHide={handleClose} placement='end' style={{width: "60%"}}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Group3 Ltd.</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className='products-mobile'>
                            <li> Vegetables</li>
                            <li> Vegetables</li>
                            <li> Vegetables</li>
                        </ul>
                  </Offcanvas.Body>
              </Offcanvas> 
        </nav>   
  )
}

export default NavBar;

