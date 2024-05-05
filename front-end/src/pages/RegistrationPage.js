import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const RegistrationPage = () => {
  const [registrationdata, setRegistrationdata] = useState({
    username: "",
    password: "",
  });

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/register",
        registrationdata
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    setRegistrationdata({
      username: "",
      password: "",
    });
  };

  const handleRegistration = (e) => {
    const { name, value } = e.target;
    setRegistrationdata((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h1>Registration From</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={registrationdata.username}
          onChange={handleRegistration}
          required
        ></input>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registrationdata.password}
          onChange={handleRegistration}
          required
        ></input>

        <button type="submit">Register</button>
        <p>
          Already Registered? <Link to="/login">Login Here</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;
