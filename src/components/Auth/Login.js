import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import "./_auth.scss";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const errors = useSelector((state) => state.errors.errors);

  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  });

  if (errors) {
    return <h1>Error...</h1>;
  }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(values));
  };

  return (
    <div className="form-container">
      <form className="loginform-card" onSubmit={handleSubmit}>
        <h1>Logga in</h1>
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
          label="Password"
          name="password"
          placeholder="password"
          type="password"
          onChange={handlePasswordInputChange}
          value={values.password}
        />
        <br />
        <button inputtype="submit" value="Submit">
          Logga in
        </button>
      </form>
    </div>
  );
};

export default Login;
