import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { SxProps } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Box from "@mui/material/Box";
import LoginModal from "../login/login-modal";

const styles = (): Record<string, SxProps | undefined> => ({
  menuIcon: {
    padding: "0 15px",
    display: "inline-flex",
    left: "0px",
    alignItems: "center",
    height: "24px",
    color: "white",
    "& svg": {
      fontSize: "30px",
    },
  },
  menu: {
    color: "#000",
    position: "absolute",
    marginTop: "65px",
    zIndex: 1000,
    background: "white",
    width: "100%",
    left: "0px",
  },
  menuItem: {
    height: "50px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    padding: "0 20px",
  },
  link: {
    a: {
      color: "#00135f",
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "28px",
      "&:link": {
        textDecoration: "none",
      },
      "&:hover": {
        textDecoration: "none",
        color: '#00135f"',
      },
      "&:active": {
        textDecoration: "none",
        color: '#00135f"',
      },
    },
  },
});

const MobileHeader = () => {
  const classes = styles();
  const cookies = new Cookies();
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const username = cookies.get(`username`);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLoginForm = () => {
    setIsOpenLogin(!isOpenLogin);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid>
          <Button sx={classes.menuIcon} onClick={toggleMenu}>
            {isMenuOpen ? <ClearIcon /> : <MenuOutlinedIcon />}
          </Button>
        </Grid>
        <Grid>
          <Button sx={classes.menuIcon}>{username}</Button>
        </Grid>
      </Grid>
      <Collapse in={isMenuOpen} sx={classes.menu}>
        <Grid item sx={classes.menuItem}>
          <Box sx={classes.link}>
            <Link onClick={() => setIsMenuOpen(false)} to="/">
              Home
            </Link>
          </Box>
        </Grid>

        <Grid item sx={classes.menuItem}>
          <Box sx={classes.link}>
            <Link onClick={() => setIsMenuOpen(false)} to="/">
              Contact
            </Link>
          </Box>
        </Grid>
      </Collapse>
      <LoginModal open={isOpenLogin} toggleLoginForm={toggleLoginForm} />
    </>
  );
};

export default MobileHeader;
