import React from 'react'

const DiscountBadge = ({value}) => {
  return (
    <p className='badge px-2 py-1 rounded-pill text-dark' style={style}>{value}</p>
  )
}

const style = {
    backgroundColor: "var(--pink)",
    fontFamily: "Nunito", 
    position: "relative", 
    // top: "50%", 
    left: "40%", 
    fontSize: "xx-small"
}

export default DiscountBadge