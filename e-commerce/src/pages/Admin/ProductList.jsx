import React, {useEffect, useState} from 'react'

const ProductList = () => {

  const [data, setData] = useState([])

  const fetchCategory = async () => {
    const response = await fetch("https://localhost:7297/api/Product/GetProduct")
    const res = await response.json()
    console.log(res)
    setData(res)
  }

  useEffect(() => {
    fetchCategory()
  }, [])


  return (
    <div className=''>
        <h3 className="text-center">Product List</h3>
        {data.map((item) => {
          return (
         <>
            <p> {item.name}</p> 
            <img src={item.image} alt="" />
            </>
          )
        })}
    </div>
  )
}

export default ProductList

