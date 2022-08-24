import React, {useEffect} from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';


const Hero = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
  }, [])

  return (
    <div>
      <div className='hero'>
        <section className='hero-content'>
          <h1>Affordable <br /> Produce from <br /> local markets</h1>
          <p>
            All you need to eat to stay healthy and fresh.
            Your locally harvested veggies and <br/> spices are all made available for you.
            Fast delivery for wholesale and consumables.
          </p>
          <div className='hero-buttons'>
            <Link to='/products' onClick={() => { window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' }) }}>
              <button className='hero-button hero-button1'>Start Shopping</button>
            </Link>
            <Link to='/account' onClick={() => { window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' }) }}>
              <button className='hero-button hero-button2'>Sign In</button>
            </Link>
            
          </div>
        </section>

      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Hero