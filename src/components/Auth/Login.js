import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import "./_auth.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.auth.isAuthenticated) this.props.history.push("/");
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  }
  render() {
    return (
      <div className="form-container">
        <form className="loginform-card" onSubmit={this.handleSubmit}>
          <h1>Logga in</h1>
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
            label="Password"
            name="password"
            placeholder="Lösenord"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <button inputtype="submit" value="Submit">
            Logga in
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
