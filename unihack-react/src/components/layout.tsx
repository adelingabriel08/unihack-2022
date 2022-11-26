import React from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box, SxProps } from "@mui/material";

const styles = (): Record<string, SxProps | undefined> => ({
  padding: {
    padding: 0,
    margin: 0,
    overflow: "hidden",
    bgcolor: "#F2F4F5",
  },
  baseScreen: {
    width: "75%",
    marginTop: "50px",
    "@media (max-width: 1200px)": {
      width: "90%",
    },
  },
});

function Layout() {
  const classes = styles();
  return (
    <Box sx={classes.padding}>
      <Header />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid sx={classes.baseScreen}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
