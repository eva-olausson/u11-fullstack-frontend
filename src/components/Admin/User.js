import React, { Component } from "react";
import { deleteProfile } from "../../actions/profileActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import "./_users.scss";

class User extends Component {
  render() {
    const { user, deleteProfile } = this.props;
    return (
      <div className="user-card">
        <div className="user-content">
          <AccountCircleOutlinedIcon
            style={{
              fontSize: 70,
            }}
          />
          <h1>
            <Link to={`/profile/${user._id}`}>{user.username}</Link>
          </h1>
          <h2>{user.email}</h2>
          <button
            type="submit"
            onClick={async () => {
              await deleteProfile(user._id);
              location.reload(); // eslint-disable-line
            }}
          >
            Ta bort
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  deleteProfile: state.deleteProfile,
});

export default connect(mapStateToProps, { deleteProfile })(User);
