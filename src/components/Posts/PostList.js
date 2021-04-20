import React, { Component } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";
import LoadingPosts from "./LoadingPosts";
import "./_add-post.scss";

class PostList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { list, loading } = this.props;
    const items = list.map((p) => <Post key={p._id} post={p} />);
    return (
      <div className="postList-container">
        <AddPost />
        {loading ? <LoadingPosts /> : items}
        <ul>{items}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.post.list,
  loading: state.post.loading,
});

export default connect(mapStateToProps, { getPosts })(PostList);
