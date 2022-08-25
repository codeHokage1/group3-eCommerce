import React from "react";
import "./ProductPageHero.css";
import Data from "./ProductPageHeroData";

const ProductPageHero = () => {
  return (
    <div className="container mt-5 below-header">
      <div className="d-sm-flex justify-content-between mt-5">
        <div className="col-sm-5 mt-5 d-sm-flex justify-content-between flex-wrap text-center mobile-view">
          {Data.map((data) => {
            return (
              <button className="category_border col-sm-5  py-4 m-3 ">
                {" "}
                {data.logo}
                {data.title}
              </button>
            );
          })}
        </div>
        <div class="col-sm-7 mt-5">
          <div class="card product_hero mt-2">
            <div class="card-body">
              <div className="hero_text text-center p-sm-5 p-4">
                <h1 className="p-sm-5 p-4 display-5 fw-bold">
                  BEST PLACE TO SHOP FOR YOUR GROCERIES{" "}
                </h1>
              </div>
            </div>
            {/* <div className="box"> </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageHero;
