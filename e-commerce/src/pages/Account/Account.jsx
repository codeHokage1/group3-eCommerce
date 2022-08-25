import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import "./account.css";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Account = ({ isLoggedIn, setIsLoggedIn, notifyLogin, regName, regEmail, regPassword, regPassword2, setRegName, setRegEmail, setRegPassword, setRegPassword2, regError, setRegError}) => {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
 

  const [isRegistered, setIsRegistered] = useState(true);

  const navigate = useNavigate();
  const notifyRegister = () => toast.success("Successfully Registered! Proceed to Login");
  // const notifyLogin = () => toast.success("Successfully Logged In, Welcome!!");
  const notifyEmail = () => toast.success("Confirmation Email has been sent to your email address");
  const notifyLogout = () => toast.success("Successfully Logged out");
  const notifyError = (err) => toast.error(err);




  const handleReg = async (e) => {

    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    e.preventDefault();
    if (!(regPassword.length > 6 && regPassword.length < 10) || !format.test(regPassword)) {
      if (!(regPassword.length > 6 && regPassword.length < 10)) {
        setRegError('Password must be in between 6 and 10 characters');
      }
      if (!format.test(regPassword)) {
        setRegError('Password must include a special character');
      }
      // notifyError(regError);
      setRegPassword('')
      setRegPassword2('')
      
    } else {

          const user = {
          email: regEmail,
          password: regPassword,
          confirmPassword: regPassword2
      }

      console.log(user)
      const postOption = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Method': 'methods'
        },
        body: JSON.stringify(user)
      }
      const response = await fetch ("https://localhost:7297/api/Auth/register", postOption)
      const res = await response.json()
      console.log(res)
      toast.success(res)


          //email implementation
      var templateParams = {
        from_name: "JaraDey",
        to_name: regEmail,
        message:
          "Hi " +
          regName +
          " Welcome to JaraDey, thank you for registering with us. This email is to verify that you have successfully registered.",
      };
  
      // emailjs
      //   .send(
      //     "service_53tc4hr",
      //     "template_jf9a2if",
      //     templateParams,
      //     "j96Zi-XI6EaVaJ9vZ"
      //   )
      //   .then(
      //     function (response) {
      //       console.log("SUCCESS!", response.status, response.text);
      //       notifyEmail();
  
      //     },
      //     function (error) {
      //       console.log("FAILED...", error);
      //     }
      //   );
  
      const registeredUser = {
        name: regName,
        email: regEmail,
        password: regPassword
      }
      localStorage.setItem('registeredUser', JSON.stringify(registeredUser));
      setRegName("");
      setRegPassword("");
      setRegPassword2("");
      setIsRegistered(!isRegistered);
      setRegEmail("");
    }
    
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
        email: loginEmail,
        password: loginPassword,
    }

    const postOption = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Method': 'methods'
      },
      body: JSON.stringify(user)
    }
    const response = await fetch ("https://localhost:7297/api/Auth/login", postOption)
    const res = await response.json()
  

    // after integration with backend, logic for login
    
    if (res === 'User not found' || res === 'Wrong password, try again') {
      setRegError(res);
      notifyError(res)
    } 
    else {
      notifyLogin();
      setLoginEmail("");
      setLoginPassword("");
      setIsLoggedIn(!isLoggedIn);
      navigate("/");  
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(!isLoggedIn);
    notifyLogout();
    navigate('/');
  }

  return (
    <main className="myBody mt-5">
      <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
        {
          !isLoggedIn ? (<>
            <div className="formContainer mt-5">
              {isRegistered ? <h1> Welcome Back !</h1> : <h1>Get Started !</h1>}
              {isRegistered ? (
                                  <form onSubmit={handleLogin}>
                                    <div className="input-group">
                                      <label className="label" htmlFor="Email">
                                        Email
                                      </label>

                                      <input
                                        className="input-email"
                                        type="text"
                                        name="email"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                      />
                                      <p />
                                    </div>

                                    <div className="input-group">
                                      <label className="label" htmlFor="Password">
                                        Enter Password
                                      </label>

                                      <input
                                        className="input-email"
                                        type="password"
                                        name="password"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        placeholder="Enter your Password"
                                      />
                                      <p />
                                    </div>

                                    <button disabled ={loginEmail === "" || loginPassword ===""} type="submit" className="account-button continue">
                                      Login
                                    </button>
                                    <p>OR</p>
                                    <button className="account-button ">
                                      <div className="facebook-button">
                                        <BsFacebook style={{ color: "blue" }} />
                                        Continue with Facebook
                                      </div>
                                    </button>
                                    <br />
                                    <button className="account-button ">
                                      <div className="google-button">
                                        <FcGoogle />
                                        Sign in with Google
                                      </div>
                                    </button>
                                  </form>
                              ) : (
                                    <form onSubmit={handleReg}>
                                      <div className="input-group">
                                        <label className="label" htmlFor="name">
                                          Name
                                        </label>

                                        <input
                                          className="input-email"
                                          type="text"
                                          name="name"
                                          id="name"
                                          value={regName}
                                          onChange={(e) => setRegName(e.target.value)}
                                          placeholder="Enter your full name"
                                          required
                                        />
                                        <p />
                                      </div>
                                      <div className="input-group">
                                        <label className="label" htmlFor="Email">
                                          Email
                                        </label>

                                        <input
                                          className="input-email"
                                          type="text"
                                          name="email"
                                          value={regEmail}
                                          onChange={(e) => setRegEmail(e.target.value)}
                                          placeholder="Enter your email address"
                                          required
                                        />
                                        <p />
                                      </div>

                                      <div className="input-group">
                                        <label className="label" htmlFor="Password">
                                          Enter Password
                                        </label>

                                        <input
                                          className="input-email"
                                          type="password"
                                          name="password"
                                          value={regPassword}
                                          onChange={(e) => setRegPassword(e.target.value)}
                                          placeholder="Enter your Password"
                                          required
                                        />
                                        <ul>
                                          <li>Password must be between 6 - 12 characters</li>
                                          <li>Password must include a number</li>
                                          <li>Password must include a special character: #,$,*,%</li>
                                        </ul>
                                        <p />
                                      </div>

                                      <div className="input-group">
                                        <label className="label" htmlFor="Password2">
                                          Confirm Password
                                        </label>

                                        <input
                                          className="input-email"
                                          type="password"
                                          name="password2"
                                          value={regPassword2}
                                          onChange={(e) => setRegPassword2(e.target.value)}
                                          placeholder="Confirm Password"
                                          required
                                        />
                                        <p />
                                      </div>
                                      <button type="submit" className="account-button continue" >
                                        Register
                                      </button>
                                      <p style={{color: 'red'}}>{regError ? regError : ''}</p>
                                    </form>
            )}
            <div>
              <br />
              {isRegistered ? (
                <button
                  className="get-started"
                  onClick={() => setIsRegistered(!isRegistered)}
                  style={{ outline: "none", border: "none", background: "#F8F7F7" }}
                >
                  {" "}
                  Don't have an account? Get started
                </button>
              ) : (
                <button
                  className="get-started"
                  onClick={() => setIsRegistered(!isRegistered)}
                  style={{ outline: "none", border: "none", background: "#F8F7F7" }}
                >
                  {" "}
                  Already have an account? Log in
                </button>
              )}

              <br />
              <br />
              <p className="get-started2">
                By clicking “Continue” you accept our{" "}
                <a href="">Terms of Service and Privacy Policy</a>
              </p>
            </div>

            </div>
            </>
          ) : (
            <div className="formContainer">
                <h1>Hey, {regName}</h1>
                <p>You are logged In.</p>
                <button className="logout-button" onClick={handleLogout}>Log Out</button>
              </div>
          )
        }
    </main>
  );
};

export default Account;
