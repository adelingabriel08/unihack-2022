import Grid from "@mui/material/Grid";
import React from "react";
import Announcements from "../components/announcements/announcements";

const Home = () => {
  return (
    <Grid
      container
      sx={{
        "@media (max-width:760px)": { zoom: "75%" },
        "@media (max-width:460px)": { zoom: "55%" },
      }}
    >
      <Announcements />
    </Grid>
  );
};

export default Home;
