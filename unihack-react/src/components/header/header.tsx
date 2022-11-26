import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Cookies from "universal-cookie";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import UserMenuButton from "./user-menu-button";
import { useMediaQuery } from "@mui/material";
import MobileMenu from "./mobile-menu";
import { SxProps } from "@mui/material/styles";
import LoginModal from "../login/login-modal";
import { getUsername } from "../../helpers/auth-helpers";

const styles = (): Record<string, SxProps | undefined> => ({
  bar: {
    backgroundColor: "#002f34",
    marginTop: "0",
    height: "64px",
    color: "#fff",
    padding: "0 60px",
    "@media (max-width: 600px)": {
      padding: "0 10px",
    },
  },
  link: {
    a: {
      textTransform: "none",
      color: "white",
      textDecoration: "none",
      backgroundColor: "transparent",
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  button: {
    textTransform: "none",
    color: "white",
    textDecoration: "none",
    backgroundColor: "transparent",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

const Header = () => {
  const classes = styles();
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const isDesktop = useMediaQuery("(min-width:600px)");
  const username = getUsername();

  const toggleLoginForm = () => {
    setIsOpenLogin(!isOpenLogin);
  };
  useEffect(() => {}, []);

  return (
    <Grid
      container
      spacing={2}
      sx={classes.bar}
      alignContent="center"
      justifyContent="space-between"
      direction="row"
    >
      {isDesktop ? (
        <Grid container>
          <Grid item xs={9} container spacing={2}>
            <Grid item sx={classes.link}>
              <Link to="/">Home</Link>
            </Grid>
            <Grid item sx={classes.link}>
              <Link to="/">Contact</Link>
            </Grid>
          </Grid>
          <Grid item xs={3} container spacing={2} justifyContent="flex-end">
            <Grid item sx={classes.button}>
              {username ? (
                <UserMenuButton username={username} />
              ) : (
                <Button sx={classes.button} onClick={toggleLoginForm}>
                  Conecteaza-te
                </Button>
              )}
            </Grid>
          </Grid>

          <LoginModal open={isOpenLogin} toggleLoginForm={toggleLoginForm} />
        </Grid>
      ) : (
        <MobileMenu />
      )}
    </Grid>
  );
};

export default Header;
