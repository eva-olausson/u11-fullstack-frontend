import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";
import "./_add-post.scss";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const postData = {
      text: this.state.text,
    };

    this.props.addPost(postData);
    this.setState({ text: "" });
  }

  render() {
    return (
      <form className="postform-card" onSubmit={this.handleSubmit}>
        <br />
        <input
          label="text"
          placeholder="What's happening?"
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
          name="text"
        />
        <br />
        <button type="submit" value="Skicka">
          Dela
        </button>
      </form>
    );
  }
}

export default connect(null, { addPost })(AddPost);
