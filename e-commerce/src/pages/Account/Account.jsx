import React,{useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import "./account.css";
import { Link, useNavigate } from "react-router-dom";

const Account = ({ isLoggedIn, setIsLoggedIn }) => {
  
  const [regName, setRegName] = useState("") 
  const [regEmail, setRegEmail] = useState("") 
  const [regPassword, setRegPassword] = useState("") 
  const [regPassword2, setRegPassword2] = useState("") 

  const [loginEmail, setLoginEmail] = useState("") 
  const [loginPassword, setLoginPassword] = useState("") 

  const [isRegistered, setIsRegistered] = useState(true);

  const navigate = useNavigate();


  const handleReg = async (e) => {
    e.preventDefault(); 
    // const user = {
    //     email: regEmail, 
    //     password: regPassword, 
    //     confirmPassword: regPassword2
    // }
    // const postOption = {
    //   method: "POST", 
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json", 
    //     // 'Access-Control-Allow-Origin': '*', 
    //     // 'Access-Control-Allow-Method': 'methods'
    //   },
    //   body: JSON.stringify(user)
    // }
    // const response = await fetch ("https://localhost:7297/api/Auth/register", postOption)
    // const res = await response.json()
    // console.log(res)
    
    alert('User Registered!');

    setRegEmail("")
    setRegPassword("")
    setRegPassword2("")
    setIsRegistered(!isRegistered);
  }

  const handleLogin = async (e) => {
    e.preventDefault(); 
    // const user = {
    //     email: loginEmail, 
    //     password: loginPassword, 

    // }
    // const postOption = {
    //   method: "POST", 
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json", 
    //     // 'Access-Control-Allow-Origin': '*', 
    //     // 'Access-Control-Allow-Method': 'methods'
    //   },
    //   body: JSON.stringify(user)
    // }
    // const response = await fetch ("https://localhost:7297/api/Auth/register", postOption)
    // const res = await response.json()
    // console.log(res)
     
    alert("Login Succesful !")
    setLoginEmail("")
    setLoginPassword("")
    setIsLoggedIn(!isLoggedIn)
    navigate('/')
  }

  return (
    <main className="myBody">
      <div className="formContainer">
        {
          isRegistered ? <h1> Welcome Back !</h1> : <h1>Get Started !</h1>
        }
        {
          isRegistered ? (
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label className="label" htmlFor="Email">
                  Email
                </label>

                <input
                  className="input-email"
                  type="text"
                  name="email"
                  value= {loginEmail}
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

              <button type="submit" className="account-button continue">Login</button>
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
          ): (
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
                  value= {regName}
                  onChange={(e) => setRegName(e.target.value)}
                  placeholder="Enter your full name"
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
                  value= {regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
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
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
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
                  value={regPassword2}
                  onChange={(e) => setRegPassword2(e.target.value)}
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
          </form> 
          )
        }

        
        <div>
          <br />
          {
            isRegistered ? (
              <button className="get-started" onClick={() => setIsRegistered(!isRegistered)} style={{outline: 'none', border: 'none', background: '#F8F7F7'}}>
                {" "}
                  Don't have an account? Get started
              </button>
            ) : (
              <button className="get-started" onClick={() => setIsRegistered(!isRegistered)} style={{outline: 'none', border: 'none', background: '#F8F7F7'}}>
                {" "}
                  Already have an account? Log in
              </button>
            )
          }
            
            <br />
            <br />
            <p className="get-started2">
              By clicking “Continue” you accept our{" "}
              <a href="">Terms of Service and Privacy Policy</a>
            </p>
        </div>
      </div>
    </main>
  );
};

export default Account;
