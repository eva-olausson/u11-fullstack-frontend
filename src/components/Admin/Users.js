import React, { Component } from "react";
import User from "./User";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profileActions";
import LoadProfile from "../Profile/LoadProfile";
import SearchForm from "../Search/SearchForm";

import "./_users.scss";

class UserList extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const { list, loading } = this.props;
    const items = list.map((u) => <User key={u._id} user={u} />);
    return (
      <>
        <section className="container">
          <SearchForm />
          <h1>Användare</h1>
          {/* {loading ? <LoadProfile /> : items} */}
          <div role="list">
            <ul className="user-container">{items}</ul>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.profile.list,
  loading: state.profile.loading,
});

export default connect(mapStateToProps, { getProfiles })(UserList);
