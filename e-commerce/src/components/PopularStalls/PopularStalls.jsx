import React from 'react'
import "./PopularStalls.css"
import Button from '../Button'


const PopularStalls = () => {
  return (
    <div className='popular_stalls pt-3 pb-5 px-5 '>
      <h5 className="primary py-2">Popular stalls you can order from </h5>
      <div className='d-flex justify-content-around flex-wrap px-3 py-4'>
           <div>
           <div> <img src="assets/ellipse9.png" alt="" style={{width: "214px"}}/>  </div>
             <Button title="Iya Risi Store" padding = "px-5 mt-2" />
           </div>
           
           <div>
           <div> <img src="assets/ellipse10.png" alt="" style={{width: "214px"}}/>  </div>
             <Button title="Naija Mart" padding = "px-5 mt-2" />
           </div>
           <div>
           <div> <img src="assets/ellipse11.png" alt="" style={{width: "214px"}}/>  </div>
             <Button title="Iya Calabar" padding = "px-5 mt-2" />
           </div>

           <div>
           <div> <img src="assets/ellipse12.png" alt="" style={{width: "214px"}}/>  </div>
             <Button title="Thrive Market" padding = "px-5 mt-2" />
           </div>

           <div>
           <div> <img src="assets/ellipse13.png" alt="" style={{width: "214px"}}/>  </div>
             <Button title="Wine Palace" padding = "px-5 mt-2" />
           </div>

           <div>
           <div> <img src="assets/ellipse14.png" alt="" style={{width: "214px"}}/>  </div>
             <Button title="NIght Market" padding = "px-5 mt-2" />
           </div>

      </div>
    </div>
  )
}

export default PopularStalls
