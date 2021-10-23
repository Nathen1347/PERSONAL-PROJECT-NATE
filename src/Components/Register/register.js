import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="Register-container">
      <h1 className="Logo-register">MODERN FINANCE</h1>
      <form className="Form-container" onSubmit={handleSubmit}>
        <input
          className="Inputs"
          type="text"
          placeholder="FIRST NAME"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="Inputs"
          type="text"
          placeholder="LAST NAME"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="Inputs"
          type="text"
          placeholder="USERNAME"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="Inputs"
          type="password"
          placeholder="PASSWORD"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="Inputs"
          type="text"
          placeholder="EMAIL"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className='Terms'>
          <input type="checkbox" />
          Terms & Conditions
        </label>
        <button className="Buttons-register">Register</button>
      </form>
    </div>
  );
};

export default Register;
