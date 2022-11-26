import React from "react";
import Grid from "@mui/material/Grid";
import { Box, SxProps } from "@mui/material";
import { IItem } from "../../interfaces";
import { truncateText } from "../../helpers/text-helpers";
import FilterBar from "./filter-bar";

const items: IItem[] = [
  {
    title: "Bicicleta MTB BTWIN 520st",
    stolenItemTypeId: 1,
    stolenItemTypeName: "Bicicleta",
    serialNumber: "22f22sn",
    description: "bicicleta rosie 26 inch ",
    location: "Timisoara",
    color: "rosie",
    size: "Xl",
  },
  {
    title: "Bicicleta MTB BTWIN 520st1",
    stolenItemTypeId: 1,
    stolenItemTypeName: "Bicicleta",
    serialNumber: "22f22sn",
    description: "bicicleta rosie 26 inch ",
    location: "Timisoara",
    color: "rosie",
    size: "Xl",
  },
];

const styles = (): Record<string, SxProps | undefined> => ({
  grid: {
    width: "100%",
    paddingBottom: "20px",
  },
  product: {
    height: "170px",
    bgcolor: "white",
    margin: "10px 0",
  },
});

interface IProps {}

const Announcements: React.FC<IProps> = (props) => {
  const classes = styles();

  return (
    <Grid container sx={classes.grid}>
      <FilterBar />
      {items.map((item: IItem) => (
        <Grid container key={item.title} item xs={12} sx={classes.product}>
          <Grid item xs={3} sx={{ minWidth: "150px" }} display="inline">
            <Box
              sx={{ margin: "5px" }}
              component="img"
              height="152px"
              alt="bicicleta"
              src="https://s13emagst.akamaized.net/products/41235/41234143/images/res_ee13c730d8f5a407ce965c0cd941c05a.jpg?width=720&height=720&hash=3DEB6FFEEFD6345D652AEE07DD7E7F1F"
            />
          </Grid>
          <Grid item xs sx={{ padding: "10px", minWidth: "300px" }}>
            <Box>{truncateText(item.title)}</Box>
            <Box sx={{ marginTop: "80px", fontSize: "16px" }}>
              {item.location} - postat 22 Noiembrie 2022
            </Box>
          </Grid>
          <Grid container item xs justifyContent="flex-end">
            <Box
              sx={{ "@media (max-width:660px)": { display: "none" } }}
              height="152px"
              component="img"
              src="https://st2.depositphotos.com/1575949/5273/v/600/depositphotos_52737663-stock-illustration-stolen-red-stamp-text.jpg"
            />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Announcements;
