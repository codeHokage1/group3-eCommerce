import React, { useState } from "react";
import SearchBarSection from "../SearchbarSection/SearchBarSection";
import BonusTop from "../BonusTop/BonusTop";
import { MdOutlineAccountCircle as UserLogo } from "react-icons/md";
import { FaRegQuestionCircle as HelpLogo } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { TbApple } from "react-icons/tb";
import { TbShoppingCart as CartLogo } from "react-icons/tb";
import { BiSearchAlt as SearchLogo } from "react-icons/bi";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { FaSnowflake } from "react-icons/fa";
import { GiOpenedFoodCan } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";
import { GiChipsBag } from "react-icons/gi";
import { GiWheat } from "react-icons/gi";
import { GiMilkCarton } from "react-icons/gi";
import { FaPepperHot } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

import logo from "../../images/logoAlone.png";
import logoText from "../../images/logoText.png";

import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavBar.css";

const NavBar = ({ Categoriesdata, search, setSearch, countCartItems, setFilteredProducts }) => {
  // const [menuClicked, setMenuClicked] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const products = []
  Categoriesdata.forEach((category) => {
    category.products.forEach((product) => {
      products.push(product)
    })
  })

  const handleSearch = (e) => {
    e.preventDefault();
    const newProducts = products.filter(product => (
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
    ))
    setFilteredProducts(newProducts);
    navigate('/search')
    // setSearch('')
  }

  return (
    <nav className="navbar">
      <div className="brandAndLinks">
        <h1 className="navbar-brand">
          <Link to="/" className="link brand-link">
            <img src={logo} alt="" className="brand-logo" />
            <img src={logoText} alt="" className="brand-logo-text" />
          </Link>
        </h1>
        <ul className="links">
          <li>
            <Link to="/products" className="link">
              <TbApple className="link-logo" />
              <span className="mobile-remove">Products</span>
            </Link>
          </li>

          <li className="mobile-remove">
            <Dropdown className="mobile-remove">
              <Dropdown.Toggle
                variant="secondary"
                className="nav-help"
                id="dropdown-basic"
              >
                <HelpLogo className="link-logo" />
                <span className="mobile-remove">&nbsp;Help</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/contact");
                    setShow(false);
                  }}
                >
                  Contact Customer Care
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Live Chat</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Link to="/cartpage" className="link">
              <CartLogo className="link-logo" />
              <span className="mobile-remove">Cart</span>
              {countCartItems ? <span class="badge rounded-pill bg-danger">{countCartItems}</span> : " "}
            </Link>
          </li>

          <li>
            <Link to="/account" className="link">
              <UserLogo className="link-logo" />
              <span className="mobile-remove">Account</span>
            </Link>
          </li>

        </ul>
      </div>
      <div className="">
        <form onSubmit={handleSearch}>
          <button className="search-button" type="submit">
            <SearchLogo />
          </button>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for products, stores and categories"
            className="search-input"
          />
          {/* <SearchBarSection /> */}
        </form>
        <div>
          <FaBars className="menu-button" onClick={handleShow} />
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "60%" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt="" className="brand-logo" />
            <img src={logoText} alt="" className="brand-logo-text" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="mobile-menu-body">
          <p style={{ color: "grey", textDecoration: "underline" }}>
            Products Catergories
          </p>
          <ul className="products-mobile">
            <li>
              {" "}
              <GiOpenedFoodCan /> Canned Foods
            </li>
            <li>
              {" "}
              <GiMilkCarton /> Dairy Products
            </li>
            <li>
              {" "}
              <GiCupcake /> Dry and Baking
            </li>
            <li>
              {" "}
              <FaSnowflake /> Frozen Foods
            </li>
            <li>
              {" "}
              <FaBeer /> Beverages
            </li>
            <li>
              {" "}
              <GiChipsBag /> Snacks
            </li>
            <li>
              {" "}
              <FaPepperHot /> Vegetable
            </li>
            <li>
              {" "}
              <GiWheat /> Grain
            </li>
            <hr />
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                className="nav-help"
                id="dropdown-basic"
              >
                <HelpLogo />
                <span className="help-mobile">&nbsp;Help</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => navigate("/contact")}
                  href="#/action-1"
                >
                  Contact Customer Care
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Live Chat</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
};

export default NavBar;
