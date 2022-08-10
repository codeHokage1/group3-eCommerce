import React from 'react'

const DiscountBadge = ({title}) => {
  return (
    <p className="badge rounded-pill px-4 py-2 text-dark" style={style}>{title}</p>
  )
}

const style = {
    backgroundColor: "var(--pink)",
    fontFamily: "Nunito", 
    position: "absolute",
    right: "1em", 
    top: "5%"
}

export default DiscountBadge