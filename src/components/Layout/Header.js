import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreVert from "@material-ui/icons/MoreVert";

import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authActions";
import SearchForm from "../Search/SearchForm";

const styles = {
  root: {
    flexGrow: 1,
  },
  logo: {
    color: "#000",
    fontSize: 30,
    fontWeight: 600,

    cursor: "pointer",
    "@media (min-width: 995px)": {
      fontSize: 40,
      fontWeight: 600,
    },
  },
  space: {
    justifyContent: "space-between",
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout() {
    this.setState({ anchorEl: null });
    this.props.logoutUser();
  }
  render() {
    const { classes, isAuthenticated, user } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const guestLinks = (
      <div>
        <IconButton
          aria-owns={open ? "menu-appbar" : undefined}
          aria-haspopup="true"
          color="inherit"
          onClick={this.handleMenu}
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="menu-appbar"
          style={{ width: "9rem" }}
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          anchorEl={anchorEl}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link to="/login">Login</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to="/register">Register</Link>
          </MenuItem>
        </Menu>
      </div>
    );

    const authLinks = isAuthenticated && (
      <div>
        <IconButton
          aria-owns={open ? "menu-appbar" : undefined}
          aria-haspopup="true"
          color="inherit"
          onClick={this.handleMenu}
        >
          {user.isAdmin && <h4 className="admin-header">Admin</h4>}

          <AccountCircle
            style={{
              fontSize: 40,
            }}
          />
        </IconButton>
        <Menu
          id="menu-appbar"
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          anchorEl={anchorEl}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link to="/">Hem</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to={`/profile/${user._id}`}>Min Profil</Link>
          </MenuItem>

          {user.isAdmin && (
            <MenuItem onClick={this.handleClose}>
              <Link to="/users">Användare</Link>
            </MenuItem>
          )}
          <MenuItem>
            <Link to="/#" onClick={this.handleLogout}>
              Logga ut
            </Link>
          </MenuItem>
        </Menu>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            background: "0",
            color: "black",
            boxShadow: "0px 0px 0px 0px",
            fontSize: "64px",
          }}
        >
          <Toolbar className={classes.space}>
            <Link to="/" className={classes.logo}>
              ShareApp
            </Link>
            {isAuthenticated ? authLinks : guestLinks}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// Connect with isAuthenticated boolean from auth reducer

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logoutUser })(
  withStyles(styles)(Header)
);
