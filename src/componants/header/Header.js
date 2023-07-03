import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles/useStyle"
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import apiService from "../../helpers/apiService";
import Cookies from "universal-cookie";

const Header = ({isAuthenticated,setAuthenticated}) => {
  const classes = useStyles();
  const cookies = new Cookies();

  const handleLogout = () => {
    cookies.remove("isloggedin")
    setAuthenticated(false)
    apiService.get("logout")
  }

  console.log(isAuthenticated)

  return (
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h5" style={{ width:"0" }} className={classes.logo}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            myshop
          </Link>
        </Typography>

        <div className={classes.navlinks}>
          {(isAuthenticated) ? (
            <>
              <Link to="/cart" className={classes.link}>
                <ShoppingCartIcon />
              </Link>
              <Link onClick={handleLogout} to="/login" className={classes.link}>
                <ExitToAppIcon />
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup" className={classes.link}>
                signup
              </Link>
              <Link to="/login" className={classes.link}>
                login
              </Link>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header