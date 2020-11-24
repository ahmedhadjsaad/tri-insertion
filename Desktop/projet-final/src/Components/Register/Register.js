import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const Register = (props) => {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = () => {
    console.log("hello");
    try {
      axios.post("/Register", {
        name,
        familyName,
        email,
        password,
      });
    } catch (error) {}
  };

  return (
    <div>
      <div className="login-register">
        <h1 onClick={() => props.history.push("/Login")}> Login</h1>
        <h1>Register</h1>
      </div>
      <div className="lg-ctn">
        <h4> Register an account </h4>
        <input
          class="ant-input form-control"
          type="text"
          placeholder="Name ..."
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          class="ant-input form-control"
          type="text"
          placeholder="Family Name ..."
          onChange={(e) => setFamilyName(e.target.value)}
        ></input>
        <input
          class="ant-input form-control"
          type="text"
          placeholder="Email address ..."
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          class="ant-input form-control"
          type="text"
          placeholder="Password ..."
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={Signup} className="btn-login">
          {" "}
          Register{" "}
        </button>
      </div>
    </div>
  );
};

export default withRouter(Register);
