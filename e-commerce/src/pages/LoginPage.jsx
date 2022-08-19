import React from "react";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap";

const LoginPage = () => {
  return (
    <div className="container">
      <h1> Welcome Back!</h1>
      <p />

      <form action="">
        <input
          className="inputemail"
          type="text"
          name="email"
          value=""
          placeholder="email"
        />
        <p />
        <Button className="login" size="sm" variant="primary">
          <h5>Continue</h5>
        </Button>
        <p />
        <p />
        <p />
        <p />

        <h5>OR</h5>
        <p />
        <p />
        <p />
        <p />

        <Button className="btn-facebook" variant="outline-primary">
          Continue with Facebook
        </Button>
        <p />
        <p />
        <p />
        <p />
        <p />
        <Button className="btn-google" variant="outline-primary">
          Sign in with Google
        </Button>
        <p />
        <a href="" className="get-started">
          Don't have an account? Get started
        </a>
        <p className="get-started2">
          By clicking “Continue” you accept our{" "}
          <a href="">Terms of Service and Privacy Policy</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
