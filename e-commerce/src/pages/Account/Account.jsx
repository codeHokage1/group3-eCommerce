import React from "react";
import { useState, useEffect, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import "./account.css";
import { Link } from "react-router-dom";

const Account = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    useRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user, password);
      setUser('');
      setPassword('');
      setSuccess(true);
  }

  return (
    <main className="myBody">
      {success ? (
        <section>
          <h1>you are logged in</h1>
          <br />
          <p>
            <Link to="/">Go to Home</Link>
          </p>
        </section>
      ):(
      <div className="formContainer">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive">
          {errMsg}
        </p>
        <h1> Welcome Back!</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="label" htmlFor="Email">
              Email
            </label>

            <input
              className="input-email"
              type="text"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              placeholder="Enter your email address"
            />
             
            <label className="label" htmlFor="password">
              Password
            </label>

            <input
              className="input-email"
              type="text"
              ref={userRef}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required 
            />
            <p />
          </div>
          <button className="account-button continue">Continue</button>
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
      )}
    </main>
  );
};

export default Account;
