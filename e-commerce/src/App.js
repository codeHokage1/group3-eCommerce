import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";



import BonusTop from "./components/BonusTop/BonusTop";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Account from "../src/pages/Account/Account";
import Profile from "./pages/Account/Profile";
import Checkout from "../src/pages/Checkout";
import Help from "../src/pages/Help";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProductPage";
import DeliveryTracking from "./pages/Delivery/DeliveryTracking";
import Footer2 from "./components/Footer2/Footer2";
import Page404 from "./pages/404/Page404";
import CartPage from "./pages/CartPage/CartPage";
import Contact from "./pages/Contact/Contact";
import SearchPage from "./pages/Search/SearchPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Categoriesdata from "./data";




function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const notifyLogin = () => toast.success("Successfully Logged in !");
  const notifyAddToCart = () => toast.success("Product has been added to cart!");
  const notifyRemoveFromCart = () => toast.success("Product has been removed from cart!");


  const handleAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      const newCart = cartItems.map((item) =>
        item.id === exist.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItems(newCart);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    } else {
      const newCart = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCart);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    }
    console.log(cartItems);
    notifyAddToCart();
  };

  const handleRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      const newCart = cartItems.filter((item) => item.id !== exist.id);
      setCartItems(newCart);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    } else {
      const newCart = cartItems.map((item) =>
        item.id === exist.id ? { ...item, qty: item.qty - 1 } : item
      );
      setCartItems(newCart);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    }
  };

  const totallyRemove = (product) => {
    const newCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
    notifyRemoveFromCart();
  };

  

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <BonusTop />
      <Helmet>
        <script
          src="//code.tidio.co/yvvy72t3wfgrjaddnuveceiilzjlg9tm.js"
          async
        ></script>
      </Helmet>
      <NavBar Categoriesdata={Categoriesdata} search={search} setSearch={setSearch} setFilteredProducts={setFilteredProducts} countCartItems={cartItems.length} />
      <Routes>
        <Route path={"/"} element={<Home Categoriesdata={Categoriesdata} cartItems={cartItems} handleAdd={handleAdd} handleRemove={handleRemove} />} />
        <Route path={"/account"} element={<Account isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} notifyLogin={notifyLogin} />} />
        <Route path={"/cartpage"} element={<CartPage Categoriesdata={Categoriesdata} cartItems={cartItems} handleAdd={handleAdd} handleRemove={handleRemove} totallyRemove={totallyRemove} setCartTotalPrice={setCartTotalPrice} cartTotalPrice={cartTotalPrice} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path={"/help"} element={<Help />} />
        <Route
          path={"/products"}
          element={
            <Products
              Categoriesdata={Categoriesdata}
              cartItems={cartItems}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
          }
        />
        <Route
          path={"/products/:id"}
          element={
            <SingleProduct
              Categoriesdata={Categoriesdata}
              cartItems={cartItems}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
          }
        />
        <Route path={"/delivery"} element={<DeliveryTracking />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/admin"} element={<AdminDashboard />} />
        <Route
          path={"/checkout"}
          element={<Checkout cartTotalPrice={cartTotalPrice} />}
        />
        <Route path={"*"} element={<Page404 />} />
        <Route path={"/search"} element={<SearchPage filteredProducts={filteredProducts} search={search} handleAdd={handleAdd} handleRemove={handleRemove} cartItems={cartItems} />} />
        
      </Routes>
      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
