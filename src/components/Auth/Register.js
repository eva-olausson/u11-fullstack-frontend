import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./_auth.scss";

import { registerUser } from "../../actions/authActions";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const errors = useSelector((state) => state.errors.errors);

  const dispatch = useDispatch();
  let history = useHistory();

  if (errors) {
    return <h1>Error...</h1>;
  }

  const handleUsernameInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      username: e.target.value,
    }));
  };

  const handleEmailInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      email: e.target.value,
    }));
  };

  const handlePasswordInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      password: e.target.value,
    }));
  };

  const handlePassword2InputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      password2: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(values, history));
  };

  return (
    <div className="form-container">
      <form className="loginform-card" onSubmit={handleSubmit}>
        <h1>Skapa konto</h1>

        <input
          label="Användarnamn"
          name="username"
          placeholder="Användarnamn"
          type="text"
          onChange={handleUsernameInputChange}
          value={values.username}
        />
        <br />
        <input
          label="Email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleEmailInputChange}
          value={values.email}
        />
        <br />
        <input
          label="Lösenord"
          name="password"
          placeholder="Lösenord"
          type="password"
          onChange={handlePasswordInputChange}
          value={values.password}
        />
        <br />
        <input
          label="Repetera lösenord"
          name="password2"
          placeholder="Repetera lösenord"
          type="password"
          onChange={handlePassword2InputChange}
          Registrer
          value={values.password2}
        />
        <br />
        <button inputtype="submit" value="Submit">
          Registrera dig
        </button>
      </form>
    </div>
  );
};

export default Register;
