import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Button = ({ title, btnClass, navigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
  }, [])
  return (
    <Link
          to="/products"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
          }}
    >
      <button className= {`btn ${btnClass}`} style={style}> {title} </button>
    </Link>
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