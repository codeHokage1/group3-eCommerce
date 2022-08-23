import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const StartShopping = () => {
  const navigate = useNavigate();

  return (
    <div className='my-5'>
        <Button navigate={navigate} title="Start Shopping" btnClass="px-5 py-4"/>
    </div>
  )
}

export default StartShopping