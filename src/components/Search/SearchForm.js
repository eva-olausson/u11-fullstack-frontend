import React from "react";
import { makeStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchUser } from "../../actions/profileActions";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: "50px",
    backgroundColor: "white",
    margin: "2rem auto",
    border: "solid black 1px",
    width: "90%",
    minHeight: "3rem",

    height: "50px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
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
    fontFamily: "Poppins, Arial, HelveticaNeue, Helvetica, sansSerif",
    paddingTop: "1rem",
    paddingLeft: "4rem",
    transition: theme.transitions.create("width"),
    fontSize: "18px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
}));

const SearchForm = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const classes = useStyles();

  const handleSubmit = (e) => {
    const searchData = {
      text: e.target.value,
    };

    if (e.key === "Enter") {
      dispatch(searchUser(searchData, history));
    }
  };

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
        onKeyPress={handleSubmit}
      />
    </div>
  );
};

export default SearchForm;
