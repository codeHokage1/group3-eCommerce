import React from 'react'
import '../storeheading/StoreHeading.css'

const StoreHeading = ({ narative }) => {
  return (
    <div className="marketdiv clearfix">
      <p className="marktitle">{narative}</p>
    </div>
  )
}

export default StoreHeading
