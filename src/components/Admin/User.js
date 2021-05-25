import React from "react";
import { deleteProfile } from "../../actions/profileActions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import "./_users.scss";

const User = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div className="user-container">
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
              await dispatch(deleteProfile(user._id));
              location.reload(); // eslint-disable-line
            }}
          >
            Ta bort
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
