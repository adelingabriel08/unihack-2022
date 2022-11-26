import Grid from "@mui/material/Grid";
import React from "react";
import { useParams } from "react-router-dom";
import ItemComponent from "../components/announcements/item";
import SimilarFromOlx from "../components/announcements/similar-from-olx";
import { checkIfLoggedIn } from "../helpers/auth-helpers";

const ItemPage = () => {
  const { id } = useParams();
  const isLoggedIn = checkIfLoggedIn();
  return (
    <Grid container>
      <ItemComponent id={parseInt(id || "")} />
      {isLoggedIn && <SimilarFromOlx id={parseInt(id || "")} />}
    </Grid>
  );
};

export default ItemPage;
