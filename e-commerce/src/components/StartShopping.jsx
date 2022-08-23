import React, { useEffect } from 'react';
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const StartShopping = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
  }, [])
  const navigate = useNavigate();

  return (
    <div className='my-5'>
        <Button navigate={navigate} title="Start Shopping" btnClass="px-5 py-4"/>
    </div>
  )
}

export default StartShopping