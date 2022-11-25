import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, ClickAwayListener, SxProps } from "@mui/material";
import ExpandIcon from "../common/expand-icon";

const styles = (): Record<string, SxProps | undefined> => ({
  menu: {
    zIndex: 50000,
    backgroundColor: "white",
    fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    width: "200px",
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
  modalButton: {
    textTransform: "none",
    textDecoration: "none",
    backgroundColor: "transparent",
    textAlign: "left",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  popover: {
    position: "absolute",
    zIndex: 1000000,
    top: "65px",
    right: "30px",
  },
});

interface IProps {
  username: string;
}
const UserMenuButton: React.FC<IProps> = ({ username }) => {
  const classes = styles();
  const [isOpenUseMenu, setIsOpenUseMenu] = useState(false);
  const toggleUserMenu = () => {
    setIsOpenUseMenu(!isOpenUseMenu);
  };
  const closeUserMenu = () => {
    setIsOpenUseMenu(false);
  };
  const handleLogout = () => {
    // do logout
  };

  return (
    <ClickAwayListener onClickAway={closeUserMenu}>
      <Box>
        <Button sx={classes.button} onClick={toggleUserMenu}>
          {username}
          <ExpandIcon isOpen={isOpenUseMenu} />
        </Button>
        {isOpenUseMenu && (
          <Box sx={classes.popover}>
            <Grid container sx={classes.menu} direction="column">
              {/* <Button className={classes.modalButton}>Profil</Button> */}
              <Button sx={classes.modalButton} onClick={handleLogout}>
                Deconecteaza-te
              </Button>
            </Grid>
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default UserMenuButton;
