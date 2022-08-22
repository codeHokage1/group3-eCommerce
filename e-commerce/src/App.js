import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Contact from "./pages/Contact/Contact";

import products from "./data";


function App() {
  // products.map(product => console.log(product))
  
  return (
    <BrowserRouter>
      <BonusTop />
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/account"} element={<Account />} />
        <Route path={"/cart"} element={<Checkout />} />
        <Route path={"/help"} element={<Help />} />
        <Route path={"/products"} element={<Products products={products} />} />
        <Route path={"/products/:id"} element={<SingleProduct />} />
        <Route path={"/delivery"} element={<DeliveryTracking />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>

      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
