import React, { Component } from "react";
import PostList from "./Posts/PostList";
import { connect } from "react-redux";
import Login from "./Auth/Login";
import SearchForm from "./Search/SearchForm";

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="container">
        {isAuthenticated ? <SearchForm /> : undefined}

        {isAuthenticated ? <PostList /> : <Login />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
