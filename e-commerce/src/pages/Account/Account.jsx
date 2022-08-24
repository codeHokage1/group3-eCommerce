import React, { useState } from "react";
import "./account.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Account = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const notify = () => toast.success("Successfully registered");


  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
      confirmPassword: password2
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
    const response = await fetch("https://localhost:7297/api/Auth/register", postOption)
    const res = await response.json()
    console.log(res)
    notify()

    setEmail("")
    setPassword("")
    setPassword2("")
  }

  return (
    <main className="myBody">
      <button onClick={notify}> test toast </button>
      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <div className="formContainer">
        <h1> Welcome Back!</h1>

        <form onSubmit={onSubmit}>
          <div className="input-group">
            <label className="label" htmlFor="Email">
              Email
            </label>

            <input
              className="input-email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
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
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm Password"
            />
            <p />
          </div>
          <button type="submit" className="account-button continue">Register</button>
          {/* <p>OR</p>
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
          </button> */}
          <br />
          <a href="" className="get-started">
            {" "}
            <Link to="/profile" className="link">
              Don't have an account? Get started
            </Link>
          </a>{" "}
          <br />
          <br />
          <p className="get-started2">
            By clicking “Continue” you accept our{" "}
            <a href="">Terms of Service and Privacy Policy</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Account;
