import React from 'react'

const DiscountBadge = ({value}) => {
  return (
    <p className='badge px-4 py-2 rounded-pill text-dark' style={style}>{value}</p>
  )
}

const style = {
    backgroundColor: "var(--pink)",
    fontFamily: "Nunito", 
    position: "absolute", 
    top: "10%", 
    right: "5%"
}

export default DiscountBadge