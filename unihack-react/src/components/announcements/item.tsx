import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import react, { useEffect, useState } from "react";
import { IItem } from "../../interfaces";
import { getStolenItemById } from "../../utils/api-service";

interface IProps {
  id: number;
}

const ItemComponent = (props: IProps) => {
  const { id } = props;
  const [item, setItem] = useState<IItem>();

  useEffect(() => {
    getStolenItemById(id).then((result: IItem) => setItem(result));
  }, []);

  return (
    <Grid container spacing={5} sx={{ paddingBottom: "30px" }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{ margin: "5px", width: "100%", borderRadius: "5px" }}
          component="img"
          alt="bicicleta"
          src={
            item?.fileUrl !== undefined
              ? item?.fileUrl
              : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ fontSize: "14px", marginTop: "10px" }}>
          {item?.location.split(",")[0]} -{" "}
          {item?.createdTimeUTC.toString().slice(0, 10)}
        </Box>
        <Box component="h2" sx={{ color: "gray" }}>
          Categorie: {item?.stolenItemType.name}
        </Box>
        <Box component="h2">{item?.title} </Box>
        <Box component="h3">
          <Box component="span" sx={{ color: "gray" }}>
            Serie Fabricatie:
          </Box>{" "}
          {item?.serialNumber}{" "}
        </Box>
        <Box component="h3">
          <Box component="span" sx={{ color: "gray" }}>
            Culoare:{" "}
          </Box>
          {item?.color}
        </Box>
        <Box component="h3">
          <Box sx={{ color: "gray" }} component="span">
            Marime:
          </Box>
          {item?.size}
        </Box>
        <Box>
          <Box sx={{ color: "gray" }}>DESCRIERE</Box> {item?.description}
        </Box>

        <Box component="h3" sx={{ color: "red" }}>
          Proprietar: {item?.user.firstName} {item?.user.phoneNumber}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ItemComponent;
