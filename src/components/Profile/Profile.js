import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsByUserId, getUserProfile } from "../../actions/profileActions";
import Post from "../Posts/Post";
import "./_profile.scss";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchForm from "../Search/SearchForm";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPostsByUserId(this.props.match.params.userId);
    this.props.getUserProfile(this.props.match.params.userId);
  }

  render() {
    const { list, auth, profile } = this.props;
    let items;
    items = list && list.map((el) => <Post key={el._id} post={el} />);
    let profileInfo;
    if (profile && items) {
      profileInfo = (
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-content">
              <AccountCircleOutlinedIcon
                style={{
                  fontSize: "60px",
                }}
              />
              <h1>{profile.username}</h1>
              <h2>{profile.email}</h2>
              <h3>Meddelanden: {items.length}</h3>
            </div>
          </div>
        </div>
      );
    }
    return (
      <>
        <div className="container">
          <SearchForm />

          <h1>Profil</h1>

          {profileInfo}
          <h2>Meddelanden</h2>
          <div className="profile-messages">{items}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.post.list,
  profile: state.profile.user,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPostsByUserId, getUserProfile })(
  Profile
);
