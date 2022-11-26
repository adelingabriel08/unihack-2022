import { Box, Grid, SxProps } from "@mui/material";
import { useEffect, useState } from "react";
import { truncateText } from "../../helpers/text-helpers";
import { SimilarObject } from "../../interfaces/similar-objects";
import { getSimilatObjects } from "../../utils/api-service";

interface IProps {
  id: number;
}

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

const SimilarFromOlx = (props: IProps) => {
  const { id } = props;
  const classes = styles();

  const [similarObjects, setSimilarObjects] = useState<SimilarObject[]>([]);

  const onClickHandler = (url: string) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    getSimilatObjects(id).then((result: SimilarObject[]) =>
      setSimilarObjects(result)
    );
  }, []);

  return (
    <Grid container>
      {similarObjects.map((item: SimilarObject) => (
        <Grid
          container
          key={`${item.title}-${Math.random() * 100}`}
          item
          xs={12}
          sx={classes.product}
          onClick={() => onClickHandler(item.advertUrl)}
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
                item.imageUrl
                  ? item.imageUrl
                  : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
              }
            />
          </Grid>
          <Grid item xs sx={{ padding: "10px", minWidth: "300px" }}>
            <Box>{truncateText(item.title)}</Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
export default SimilarFromOlx;
