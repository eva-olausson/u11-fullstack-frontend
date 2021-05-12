import React, { useEffect } from "react";
import User from "./User";
import { useSelector, useDispatch } from "react-redux";
import { getProfiles } from "../../actions/profileActions";
import SearchForm from "../Search/SearchForm";

import "./_users.scss";

const UserList = () => {
  const list = useSelector((state) => state.profile.list);
  const dispatch = useDispatch();
  //const loading = useSelector((state) => state.post.loading);
  const errors = useSelector((state) => state.errors.errors);

  useEffect(() => {
    dispatch(getProfiles());
  }, []);

  if (errors) {
    return <h1>Error...</h1>;
  }

  const items = list.map((u) => <User key={u._id} user={u} />);
  return (
    <>
      <section className="container">
        <SearchForm />
        <div className="cover">
          <h1>Användare</h1>
          {/* {loading ? <LoadProfile /> : items} */}
          <div role="list">
            <ul>{items}</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserList;
