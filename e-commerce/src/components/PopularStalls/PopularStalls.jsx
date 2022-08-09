import React from 'react'
import "./PopularStalls.css"
import Button from '../Button'

const PopularStalls = () => {
  return (
    <div className='popular_stalls pt-3 pb-5 px-5 '>
      <h5 className="primary">Popular stalls you can order from </h5>
      <div className='d-flex justify-content-around flex-wrap'>
           <div>
           <div className="px-4 py-4 my-5 popularstalls_border"> <p className='px-5 py-5'> hey </p> </div>
             <Button title="Iya Risi Store" padding = "px-5" />
           </div>
           <div>
           <div className="px-4 py-4 my-5 popularstalls_border"> <p className='px-5 py-5'> hey </p> </div>
           <Button title="Naij Mart" padding = "px-5"  />
           </div>
           <div>
           <div className="px-4 py-4 my-5 popularstalls_border"> <p className='px-5 py-5'> hey </p> </div>
           <Button title="Iya Calabar" padding = "px-5" />
           </div>
           <div>
           <div className="px-4 py-4 my-5 popularstalls_border"> <p className='px-5 py-5'> hey </p> </div>
           <Button title="Thrive Market" padding = "px-5"  />
           </div>
           <div>
           <div className="px-4 py-4 my-5 popularstalls_border"> <p className='px-5 py-5'> hey </p> </div>
           <Button title="Wine Palace" padding = "px-5" />
           </div>
           <div>
           <div className="px-4 py-4 my-5 popularstalls_border"> <p className='px-5 py-5'> hey </p> </div>
           <Button title="Night Market" padding = "px-5" />
           </div>
      </div>
    </div>
  )
}

export default PopularStalls
