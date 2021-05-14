import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../actions/postActions";

import "./_add-post.scss";

const AddPost = () => {
  const [postData, setPostData] = useState({ text: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPostData({ text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(postData));
  };

  return (
    <form className="postform-card" onSubmit={handleSubmit}>
      <br />
      <input
        label="text"
        placeholder="What's happening?"
        type="text"
        onChange={handleChange}
        value={postData.text}
        name="text"
      />
      <br />
      <button type="submit" value="Dela">
        Dela
      </button>
    </form>
  );
};

export default AddPost;
