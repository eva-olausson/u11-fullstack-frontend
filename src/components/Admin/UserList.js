import React, { useEffect } from "react";
import User from "./User";
import LoadProfile from "./User";
import { useSelector, useDispatch } from "react-redux";
import { getProfiles } from "../../actions/profileActions";
import SearchForm from "../Search/SearchForm";

import "./_users.scss";

const UserList = () => {
  const list = useSelector((state) => state.profile.list);
  const loading = useSelector((state) => state.profile.loading);
  const errors = useSelector((state) => state.errors.errors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  if (errors) {
    return <h1>Error...</h1>;
  }

  const items = list.map((u) => <User key={u._id} user={u} />);
  return (
    <>
      <section className="container">
        <SearchForm />
        <h1>Användare</h1>
        {loading ? <LoadProfile /> : items}
      </section>
    </>
  );
};

export default UserList;
