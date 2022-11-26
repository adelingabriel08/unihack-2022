import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, SxProps } from "@mui/material";
import { IItem } from "../../interfaces";
import { truncateText } from "../../helpers/text-helpers";
import FilterBar from "./filter-bar";
import { getStolenItems } from "../../utils/api-service";
import { useNavigate } from "react-router-dom";

const styles = (): Record<string, SxProps | undefined> => ({
  grid: {
    width: "100%",
    paddingBottom: "20px",
  },
  product: {
    borderRadius: "6px",
    height: "170px",
    bgcolor: "white",
    margin: "10px 0",
    cusror: "pointer",
  },
});

interface IProps {}

const Announcements: React.FC<IProps> = (props) => {
  const classes = styles();
  const navigate = useNavigate();
  const [items, setItems] = useState<IItem[]>([]);

  const onClickHandler = (id: number) => {
    navigate(`/item/${id}`);
  };

  useEffect(() => {
    getStolenItems().then((result) => setItems(result));
  }, []);

  return (
    <Grid container sx={classes.grid}>
      <FilterBar />
      {items.map((item: IItem) => (
        <Grid
          container
          key={item.title}
          item
          xs={12}
          sx={classes.product}
          onClick={() => onClickHandler(item.id)}
        >
          <Grid
            item
            container
            xs={3}
            sx={{ minWidth: "150px" }}
            justifyContent="center"
          >
            <Box
              sx={{ margin: "5px" }}
              width="152px"
              component="img"
              alt="bicicleta"
              src={
                item.fileUrl !== undefined
                  ? item.fileUrl
                  : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
              }
            />
          </Grid>
          <Grid item xs sx={{ padding: "10px", minWidth: "300px" }}>
            <Box>{truncateText(item.title)}</Box>
            <Box sx={{ marginTop: "80px", fontSize: "16px" }}>
              {item.location} - postat{" "}
              {item.createdTimeUTC.toString().slice(0, 10)}
            </Box>
          </Grid>
          <Grid container item xs justifyContent="flex-end">
            <Box
              sx={{
                "@media (max-width:660px)": { display: "none" },
                marginRight: "5px",
              }}
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
