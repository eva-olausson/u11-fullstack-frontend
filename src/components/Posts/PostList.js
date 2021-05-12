import React, { useEffect } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/postActions";
import LoadingPosts from "./LoadingPosts";
import "./_add-post.scss";

const PostList = () => {
  const list = useSelector((state) => state.post.list);
  const loading = useSelector((state) => state.post.loading);
  const errors = useSelector((state) => state.errors.errors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (errors) {
    return <h1>Error...</h1>;
  }

  const items = list.map((p) => <Post key={p._id} post={p} />);

  return (
    <div className="postList-container">
      <AddPost />

      {loading ? <LoadingPosts /> : items}
      <div role="list">
        <ul>{items}</ul>
      </div>
    </div>
  );
};

export default PostList;
