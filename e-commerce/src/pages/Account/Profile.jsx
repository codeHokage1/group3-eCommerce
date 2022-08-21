import React from "react";
import Button from "react-bootstrap/Button";
import "./profile.css";

const Profile = () => {
  return (
    <main className="profile-body">
      <div className="profile-form">
        <h1> User's Profile</h1>

        <p className="myspan">
          if you are a new member or dont have an account kindly create a new
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
            className="profile-name"
            type="text"
            name="FirstName"
            value=""
            placeholder=""
          />
          <p />
          <div className="profile-radio">
            <input type="radio" id="radio1" name="male" value="Male" />
            <label className="r-label">Male</label>
            <input type="radio" id="radio2" name="female" value="Female" />
            <label className="r-label">Female</label>
          </div>
          <p />
          <div className="myname2">
            <label for="FirstName" className="">
              Email
            </label>
          </div>
          <p />
          <input
            className="profile-name"
            type="text"
            name="email"
            value=""
            placeholder=""
          />
          <p />
          <div className="profile-row">
            <div className="profile-column">
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
                placeholder="+234"
              />
            </div>

            <div className="prfoile-column">
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

          <Button className="profile-login" size="" variant="primary">
            Create
          </Button>
          <p />
        </form>
      </div>
    </main>
  );
};

export default Profile;
