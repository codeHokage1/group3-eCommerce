import React from 'react'

const Button = ({title, btnClass}) => {
  return (
    <button className= {`btn ${btnClass}`} style={style}> {title} </button>
  )
}


const style = {
    backgroundColor: "var(--primary_color)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontFamily: "Nunito"
}
export default Button