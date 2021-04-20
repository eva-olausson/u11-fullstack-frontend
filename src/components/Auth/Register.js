import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./_auth.scss";

import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      errors: {},
    };

    // eslint-disable-next-line no-restricted-globals
    this.props.registerUser(userData, this.props.history);

    console.log(userData);
  }
  render() {
    return (
      <div className="form-container">
        <form className="signupform-card" onSubmit={this.handleSubmit}>
          <h1>Skapa konto</h1>

          <input
            label="Användarnamn"
            name="username"
            placeholder="Användarnamn"
            type="text"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br />
          <input
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <input
            label="Lösenord"
            name="password"
            placeholder="Lösenord"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <input
            label="Repetera lösenord"
            name="password2"
            placeholder="Repetera lösenord"
            type="password"
            onChange={this.handleChange}
            Registrer
            value={this.state.password2}
          />
          <br />
          <button inputtype="submit" value="Submit">
            Registrera dig
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
