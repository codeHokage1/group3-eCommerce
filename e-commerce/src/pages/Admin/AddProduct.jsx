import React, { useState, useEffect } from 'react'


const AddProduct = () => {
  const [categories, setCategories] = useState([])
  const [inputs, setInputs] = useState({})


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    // console.log(inputs)
  }

  const onSubmit = async (e) => {
    e.preventDefault(); 
  
    const postOption = {
      method: "POST", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(inputs)
    }
    const response = await fetch ("https://localhost:7297/api/Product/CreateProduct", postOption)
    const res = await response.json()
    console.log(res)
  }


  const fetchCategory = async () => {
    const response = await fetch("https://localhost:7297/api/category/getcategory")
    const res = await response.json()
    console.log(res)
    setCategories(res)
  }

  useEffect(() => {
    fetchCategory()
  }, [])


  return (
    <div>
      <h3 className='text-center'>Add Product </h3>
      <form onSubmit={onSubmit}>
        <div class="mb-3">
          <label for="categoryId" class="form-label" id="categoryId" name="categoryId"> Category </label>
          <select class="form-select" name="categoryId" id="categoryId" value={inputs.categoryId ||""} onChange={handleChange} >
          <option selected>Select a category </option>
            {categories.map((category, index) => {
              return(
                <option key={index} value={category.id}>{category.name}</option>
              )
            })}
          </select>
        </div>

        <div className="row">
          <div class="mb-3 col-6 ">
            <label for="name" class="form-label"> Product Name</label>
            <input type="text" class="form-control" id="name" name="name" value={inputs.name|| ""} onChange={handleChange}/>
          </div>

          <div class="mb-3 col-6">
            <label for="price" class="form-label"> Price </label>
            <input type="number" class="form-control" id="price" name="price" value={inputs.price|| ""} onChange={handleChange} />
          </div>
        </div>

        <div class="mb-3">
          <label for="description" class="form-label"> Description</label>
          <input type="text" class="form-control" id="description" name="description" value={inputs.description|| ""} onChange={handleChange}/>
        </div>

        <div className="row">
          <div class="mb-3 col-6">
            <label for="rate" class="form-label"> Rate </label>
            <input type="number" class="form-control" id="rate" name="rate" value={inputs.rate|| ""} onChange={handleChange}/>
          </div>
          <div class="mb-3 col-6">
            <label for="count" class="form-label"> Count </label>
            <input type="number" class="form-control" id="count" name="count" value={inputs.count|| ""} onChange={handleChange}/>
          </div>
        </div>

        <div class="mb-3">
          <label for="image" class="form-label"> Image</label>
          <input type="file" class="form-control" id="image" name="image" value={inputs.image|| ""} onChange={handleChange} />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddProduct