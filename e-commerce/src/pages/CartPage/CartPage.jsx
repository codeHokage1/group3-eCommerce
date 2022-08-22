import React from "react";
import './cartpage.css';
import beef2 from '../../images/beef2.png'
import { BsCart4 } from "react-icons/bs";
import FrozenFood from "../../components/frozenfood/FrozenFood";
import BeverageSnack from "../../components/beveragesnack/BeverageSnack";

const CartPage = () => {
  return (
    <div>
      <header className="w-100 py-4 flex-shrink-0 bg-dark text-white">
        <div className="container ">
          <h3 className="nav justify-content-center">
            {" "}
            <BsCart4 /> CART{" "}
          </h3>
        </div>
      </header>
      <div className='container-one '>
      <div className="py-4 container w-90 px-0">
<div className="row">
  <div className="col-sm-6">
    <div className="card py-4 px-2">
    <div className="row">
    <div className="col-sm-6">
      <img src={beef2} class="img-fluid image px-4"/>
      <div className="clearfix">
      <p className="markettitle">Remove</p>
    </div>
      </div>
      
      <div className="col-sm-6 px-5">
        <h4 className="fw-bolder text-dark pb-3">COW MEAT (BEEF)</h4>
        <h5 className="fw-bolder pb-3">Quantity: 3 kilos</h5>
        <h4 className="fw-bolder text-dark">N6,000</h4>
        <p className="discountbadge"> -20% </p>
        <p className="card-text"><s>N5,500</s> </p>
        <p><button className="add-button">+</button>
         {"  2  "}
        <button className="add-button">-</button></p>
      </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card py-4 px-2">
    <div className="row">
    <div className="col-sm-6">
      <img src={beef2} class="img-fluid image px-4"/>
      <div className="clearfix">
      <p className="markettitle">Remove</p>
    </div>
      </div>
      
      <div className="col-sm-6 px-5">
        <h4 className="fw-bolder text-dark pb-3">COW MEAT (BEEF)</h4>
        <h5 className="fw-bolder pb-3">Quantity: 3 kilos</h5>
        <h4 className="fw-bolder text-dark">N6,000 </h4>
        <p className="discountbadge"> -20% </p> 
        <p className="card-text"><s>N5,500</s> </p>
        <p><button className="add-button">+</button>
         {"  2  "}
        <button className="add-button">-</button></p>
      </div>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
      
      <div className="container two">
        <h3 className="p-3">cart summary</h3>
        <button className="checkout-button p-2 price-amount">CHECK OUT (N6,600)</button>
        <h3 className="p-3">
        Keep shopping 
        </h3>
      </div>
      
      <FrozenFood title='Frozen Food'/>
      {/* <FoodContainer title="Food items" /> */}
      <BeverageSnack title='Beverages and Snacks'/>
      
      
      
    </div>
    
    
  );
};

export default CartPage;
