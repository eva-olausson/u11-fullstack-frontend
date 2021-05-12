import React from "react";
import PostList from "./Posts/PostList";
import Login from "./Auth/Login";
import SearchForm from "./Search/SearchForm";

import { useSelector } from "react-redux";

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="container">
      {isAuthenticated ? <SearchForm /> : undefined}
      {isAuthenticated ? <PostList /> : <Login />}
    </div>
  );
};

export default Home;
