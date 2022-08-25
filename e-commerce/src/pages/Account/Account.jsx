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
  const notifyEmail = () => toast.success("Confirmation Email has been sent to your email address");
  const notifyLogout = () => toast.success("Successfully Logged out");
  const notifyError = (err) => toast.error(err);



  const handleReg = async (e) => {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    e.preventDefault();
    if (!(regPassword.length > 6 && regPassword.length < 10) || !format.test(regPassword) || (regPassword !== regPassword2)) {
      if (!(regPassword.length > 6 && regPassword.length < 10)) {
        setRegError('Password must be in between 6 and 10 characters');
      }
      if (!format.test(regPassword)) {
        setRegError('Password must include a special character');
      }
      if (regPassword !== regPassword2) {
        setRegError('Password do not match');
      }
      notifyError(regError);
      setRegPassword('')
      setRegPassword2('')
      
    } else {
      var templateParams = {
        from_name: "JaraDey",
        to_name: regEmail,
        message:
          "Hi " +
          regName +
          " Welcome to JaraDey, thank you for registering with us. This email is to verify that you have successfully registered.",
      };
  
      emailjs
        .send(
          "service_53tc4hr",
          "template_jf9a2if",
          templateParams,
          "j96Zi-XI6EaVaJ9vZ"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            notifyEmail();
  
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
  
      //emaillllll
  
      // alert("User Registered!");
      notifyRegister();
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
    const registeredUser = {
      email: JSON.parse(localStorage.getItem('registeredUser')).email,
      password: JSON.parse(localStorage.getItem('registeredUser')).password
    };

    if (loginEmail === registeredUser.email && loginPassword === registeredUser.password) {
      notifyLogin();
      setLoginEmail("");
      setLoginPassword("");
      setIsLoggedIn(!isLoggedIn);
      navigate("/");  
    } else {
      setRegError('The details are either do not match or do not exist')
      notifyError(regError);
      setLoginEmail("");
      setLoginPassword("");
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

                                    <button type="submit" className="account-button continue">
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
                                        <ul>
                                          <li>Passwords must match</li>
                                        </ul>
                                        <p />
                                      </div>
                                      <button type="submit" className="account-button continue">
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
