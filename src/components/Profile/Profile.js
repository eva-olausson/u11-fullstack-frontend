import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsByUserId, getUserProfile } from "../../actions/profileActions";
import Post from "../Posts/Post";
import "./_profile.scss";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchForm from "../Search/SearchForm";
import { useParams } from "react-router-dom";

const Profile = () => {
  const list = useSelector((state) => state.post.list);
  const profile = useSelector((state) => state.profile.user);
  const errors = useSelector((state) => state.errors.errors);

  const dispatch = useDispatch();

  let { userId } = useParams();

  useEffect(() => {
    dispatch(getPostsByUserId(userId));
    dispatch(getUserProfile(userId));
  }, []);

  if (errors) {
    return <h1>Error...</h1>;
  }

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
                fontSize: "70px",
              }}
            />
            <h1>{profile.username}</h1>
            <h2>{profile.email}</h2>

            <h3>
              Meddelanden:
              {items.length}
            </h3>
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
};

export default Profile;
