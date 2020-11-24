import React from "react";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="login-container">
      <div className="login-register">
        <h1> Login</h1>
        <h1 onClick={() => props.history.push("/Register")}>Register</h1>
      </div>
      <div className="lg-ctn">
        <h4> Log in your account </h4>
        <input
          class="ant-input form-control"
          type="text"
          placeholder="Email address ..."
        ></input>
        <input
          class="ant-input form-control"
          type="text"
          placeholder="Password ..."
        ></input>
        <button className="btn-login"> Login </button>
      </div>
    </div>
  );
};

export default withRouter(Login);
