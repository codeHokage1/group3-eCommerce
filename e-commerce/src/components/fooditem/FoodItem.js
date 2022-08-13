import React from 'react'

import { FiPlus } from 'react-icons/fi'
import '../fooditem/FoodItem.css'

const FoodItem = ({ discount, img, name, price, discountprice }) => {
  return (
    <>
      <div className="foodContainer">
        <div className="foodcon">
          <div className="discountdiv">
            <p className="discountbadge">{discount}</p>
          </div>

          <div className="foodcard">
            <div className="imgitem">
              <img src={img} />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <p className="fruitset mt-2">{name}</p>
            <p className="fruitset boldfont">{price}</p>

            <p className="fruitline">{discountprice}</p>
          </div>
          <div className="mt-2">
            <p className="addtocart">
              <FiPlus className="minman" /> Add to cart
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodItem
