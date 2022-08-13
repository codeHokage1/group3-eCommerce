import React from 'react'
import { Card } from 'react-bootstrap'
import '../advantages/Advantages.css'
import hand from '../../images/hand.png'

const Advantages = () => {
  return (
    <>
      <Card className="advantages">
        <img src={hand} />
        <p className="advtext">Low cost shipping</p>
        <div className="navandname">
          <div className="sliderdiv">hello</div>
        </div>
      </Card>
    </>
  )
}

export default Advantages
