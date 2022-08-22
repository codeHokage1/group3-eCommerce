import React from 'react'
import Button from '../../components/Button'
import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div className="text-center  mt-5 py-5">
                <p className="fw-bold"> GOT A QUESTION? </p>
                <h1 className='display-1 fw-bolder'> Contact JaraDey </h1>
                <p> We are here to help and answer any question you might have. We look forward to hearing from you </p>
            </div>
            <div className="background py-5">
                <div className="container ">
                    <div className="row">
                        <div className='col-sm-6 col-12 bg-light border rounded'>
                            <form className="py-3 px-3">
                                <div class="mb-3">
                                    <label for="Name" class="form-label">Name (required)</label>
                                    <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="Email" class="form-label">Email address (required) </label>
                                    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="Message" class="form-label">Message  (required) </label>
                                    <textarea class="form-control" id="Message" rows="3"></textarea>
                                </div>
                                <Button title="Submit" />
                            </form>
                        </div>
                        <div className='col-sm-6 col-12 px-4 py-4'> 
                            <h4 className='fw-bold'>How Can We Help? </h4> 
                            <p> Please select a topic below related to your inquiry. If you don’t find what you need, fill out our contact form. </p>
                            
                            <hr />
                            <h5 className='fw-bold'> Get Inspired </h5>
                            <p> Discover the many ways in which our customers use JaraDey</p>
                            <hr />
                            <h5 className='fw-bold'> Become a Partner </h5>
                            <p> Join our Affiliate Partner Program and let's expand across Nigeria </p>
                            <hr />
                            <h5 className='fw-bold'> Become a Logistic Service Partner </h5>
                            <p> Join our Logistic Partner Program and let's expand across Nigeria</p>
                         </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact
