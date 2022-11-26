import Grid from "@mui/material/Grid";
import React from "react";
import { useParams } from "react-router-dom";
import ItemComponent from "../components/announcements/item";

const ItemPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Grid container>
      <ItemComponent id={parseInt(id || "")} />
    </Grid>
  );
};

export default ItemPage;
