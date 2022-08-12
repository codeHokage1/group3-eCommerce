import React from 'react'
import "./PopularStalls.css"
import Button from '../Button'
import  pic1 from "../../images/assets/Ellipse9.png"
import  pic2 from "../../images/assets/Ellipse10.png"
import  pic3 from "../../images/assets/Ellipse11.png"
import  pic4 from "../../images/assets/Ellipse12.png"
import  pic5 from "../../images/assets/Ellipse13.png"
import  pic6 from "../../images/assets/Ellipse14.png"


const PopularStalls = () => {
  return (
    <div className='popular_stalls pt-3 pb-5 px-5 '>
      <h5 className="primary">Popular stalls you can order from </h5>
      <div className='d-flex justify-content-around flex-wrap mobile-view'>
           <div>
           <div className="py-2 my-3 stall-item"> <img src={pic1} alt="" /> </div>
             <Button title="Iya Risi Store" btnClass="px-4" />
           </div>
           <div>
           <div className="py-2 my-3 stall-item"> <img src={pic2} alt=""  /> </div>
             <Button title="Naija Mart" btnClass="px-4"/>
           </div>
           <div>
           <div className="py-2 my-3 stall-item"> <img src={pic3} alt=""  /> </div>
             <Button title="Iya Calabar" btnClass="px-4"/>
           </div>
           <div>
           <div className="py-2 my-3 stall-item"> <img src={pic4} alt=""  /> </div>
             <Button title="Thrive Market" btnClass="px-4"/>
           </div>
           <div>
           <div className="py-2 my-3 stall-item"> <img src={pic5} alt="" /> </div>
             <Button title="Wine Palace" btnClass="px-4"/>
           </div>
           <div>
           <div className="py-2 my-3 stall-item" > <img src={pic6} alt=""  /> </div>
             <Button title="Night Market" btnClass="px-4 stall-button"/>
           </div>
      </div>
    </div>
  )
}

export default PopularStalls
