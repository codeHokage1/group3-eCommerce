import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';


import './account.css';

const Account = () => {
  return (
    <main className="myBody">
        <div className="formContainer">          
              <h1> Welcome Back!</h1>
              
              <form action="">    
                  <div className='input-group'>
                      <label className='label' htmlFor="Email">Email</label><p/>
                      <input className="input-email" type="text" name="email" value="" placeholder='Enter your email address' /><p/>
                  </div>              
                  <button className='account-button continue'>Continue</button>

                <p>OR</p>
              

                <button className='account-button '>
                  <div className='facebook-button'>
                    <BsFacebook style={{color: 'blue'}}/>
                    Continue with Facebook
                  </div>
                </button><br />
                <button className='account-button '>
                  <div className='google-button'>
                    <FcGoogle />
                    Sign in with Google
                  </div>
                </button><br />
                <a href='' className='get-started'> Don't have an account? Get started</a> <br /><br />
                <p className='get-started2'>By clicking “Continue” you accept our <a href="">Terms of Service and Privacy Policy</a></p>
              </form>    
        </div>
    </main>
  )
}

export default Account