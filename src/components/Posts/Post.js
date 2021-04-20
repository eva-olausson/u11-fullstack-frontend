import React, { Component } from "react";
import { Link } from "react-router-dom";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import "./_post.scss";

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <div className="post-content">
          <AccountCircleOutlinedIcon
            style={{
              fontSize: 40,
            }}
          />
          <div className="text-post">
            <h1>
              <Link to={`/profile/${post.user.id}`}>{post.user.username}</Link>
            </h1>
            <p>{post.text}</p>
            <div className="clock-icon">
              <QueryBuilderOutlinedIcon
                style={{
                  marginRight: "1rem",
                  marginTop: "0.1rem",
                  fontSize: "20",
                }}
              />
              <span>
                <h3>{new Date(post.createdAt).toLocaleString()}</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
