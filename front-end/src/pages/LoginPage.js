import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        loginData
      );
      const { success, message } = response.data;

      if (success) {
        console.log("Login Success");
      } else {
        console.log(message);
      }
    } catch (err) {
      console.log(err);
    }
    setLoginData({
      username: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={loginData.username}
          onChange={handleLogin}
        ></input>

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={handleLogin}
        ></input>

        <button type="submit">Login</button>
        <p>
          Not Registered Yet?
          <Link to="/register">Register Here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
