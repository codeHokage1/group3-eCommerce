import React, { useEffect, useState } from 'react'

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
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name </th>
            <th scope="col">Price</th>
            <th scope="col"> Description</th>
            <th scope="col"> Rate</th>
            <th scope="col"> Count </th>
            <th scope="col"> Image </th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, index) => {
        return (
             <tr key={index}>
            <th scope="col">{index +1}</th>
            <th scope="col">{item.name} </th>
            <th scope="col">{item.price}</th>
            <th scope="col"> {item.description}</th>
            <th scope="col"> {item.rate}</th>
            <th scope="col"> {item.count}</th>
            <th scope="col"> {item.image} </th>
          </tr>
        )
      })}
        
        </tbody>
      </table>

     
    </div>
  )
}

export default ProductList

