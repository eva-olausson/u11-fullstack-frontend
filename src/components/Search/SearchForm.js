import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { searchUser } from "../../actions/profileActions";

const styles = (theme) => ({
  search: {
    position: "relative",
    borderRadius: "50px",
    backgroundColor: "white",
    //boxShadow: "0 8px 6px -6px black",
    marginLeft: 0,
    marginBottom: "2rem",
    border: "solid black 1px",
    minWidth: "50%",
    minHeight: "3rem",

    height: "50px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    color: "black",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "black",
    width: "100%",
  },
  inputInput: {
    fontFamily: "Poppins",
    paddingTop: "1rem",
    paddingLeft: "4rem",
    transition: theme.transitions.create("width"),
    fontSize: "18px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
});

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const searchData = {
      text: e.target.value,
    };

    if (e.key === "Enter") {
      this.props.searchUser(searchData, this.props.history);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Sök efter användare"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onKeyPress={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect(null, { searchUser })(
  withRouter(withStyles(styles)(SearchForm))
);
