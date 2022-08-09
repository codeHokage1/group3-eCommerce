import React from 'react'

const Button = ({title}) => {
  return (
    <button className="btn px-4" style={style}> {title} </button>
  )
}


const style = {
    backgroundColor: "var(--primary_color)",
    border: "none",
    color: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontFamily: "Nunito"
}
export default Button