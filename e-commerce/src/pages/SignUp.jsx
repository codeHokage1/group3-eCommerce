import React from "react";
import Button from "react-bootstrap/Button";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="container">
      <h1> User's Profile</h1>
      <p />
      <p className="myspan">
        if you are a new memeber or dont have an account kindly create a new
        account
      </p>

      <form action="">
        <div className="myname">
          <label for="FirstName" className="Fname">
            First Name
          </label>
          <label for="FirstName" className="Fname">
            Last Name
          </label>
        </div>

        <p />
        <input
          className="inputname"
          type="text"
          name="FirstName"
          value=""
          placeholder=""
        />
        <p />
        <div className="g-radio">
          <input type="radio" id="radio1" name="male" value="Male" />
          Male
          <input type="radio" id="radio2" name="female" value="Female" />
          Female
        </div>
        <p />
        <div className="myname2">
          <label for="FirstName" className="">
            Email
          </label>
        </div>
        <p />
        <input
          className="inputname"
          type="text"
          name="email"
          value=""
          placeholder=""
        />
        <p />
        <div className="row">
          <div className="column">
            <label for="FirstName" className="">
              Contact
            </label>
            <br />
            <input
              id="contact"
              className="g-contact"
              type="text"
              name="contact"
              value=""
            />
          </div>

          <div className="column">
            <label for="FirstName" className="">
              Address
            </label>
            <br />
            <input
              id="address"
              className="g-contact"
              type="text"
              name="address"
              value=""
            />
          </div>
        </div>

        <p />
        <p />
        <p />
        <p />
        <div className="g-terms">
          <input
            id="terms"
            className=""
            type="checkbox"
            name="terms"
            value=""
          />
          &nbsp; I agree with <a href="">Terms and Conditions</a>
        </div>

        <Button className="login" size="sm" variant="primary">
          <h5>CREATE</h5>
        </Button>
        <p />
      </form>
    </div>
  );
};

export default SignUp;
