import React from 'react'
import AddProduct from './AddProduct'
import ProductList from './ProductList'
// import "./AdminDashboard.css"

const AdminDashboard = () => {


    return (
        <>
            <div className='text-center below-header py-3 mt-5'>
                <h1>Admin Dashboard </h1>
            </div>
            <hr />

            <div className="container">
                <div class="row">
                    <div className="col-sm-3 col-12">
                        <div class="nav flex-sm-column flex-row justify-content-center nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                            <button class="btn custom_btn active my-3" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Add Product </button>
                            <button class="btn my-3" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"> Product List</button>
                            {/* <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button> */}
                        </div>
                    </div>
                    <div class="tab-content col-sm-8 offset-sm-1 col-12" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"> <AddProduct /> </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> <ProductList /> </div>
                        {/* <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default AdminDashboard