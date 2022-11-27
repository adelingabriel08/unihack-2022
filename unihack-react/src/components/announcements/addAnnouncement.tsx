import { Box, Button, Grid } from "@mui/material";
import react, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { IFilterOption, IItem } from "../../interfaces";
import {
  getStolenItemCategories,
  insertStolenItem,
} from "../../utils/api-service";
import ImageUpload from "../common/inputs/image-input";
import SelectInput from "../common/inputs/select-input";
import TextInput from "../common/inputs/text-input";

const AddAnnouncement = () => {
  const { register, handleSubmit, reset } = useForm<IItem>({
    mode: "all",
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [redirectToHomePage, setredirectToHomePage] = useState(false);
  const [categories, setCategories] = useState<IFilterOption[]>([]);
  const onSubmit = async (data: IItem) => {
    try {
      insertStolenItem({
        ...data,
        stolenItemTypeId: parseInt(selectedCategory),
        fileUrl: imgUrl,
      });
      setredirectToHomePage(true);
    } catch (e: any) {
      console.log(e);
    }
    reset();
  };

  const handleCategoryChange = (event: { target: { value: string } }) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    getStolenItemCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  const addItemForm = (
    <Grid container>
      <form noValidate autoComplete="off">
        <Grid container item>
          <Grid item xs={12}>
            <TextInput
              register={register("title", {
                required: true,
                minLength: 1,
              })}
              type="text"
              name="name"
              rows={1}
              isRequired
            />
            <TextInput
              register={register("description", {
                required: true,
                minLength: 1,
              })}
              type="text"
              name="Description"
              rows={5}
              isRequired
            />
            <TextInput
              register={register("location", {
                required: true,
                minLength: 1,
              })}
              type="text"
              name="Location"
              rows={1}
              isRequired
            />
            <TextInput
              register={register("color", {
                required: true,
                minLength: 1,
              })}
              type="text"
              name="Color"
              rows={1}
              isRequired
            />
            <TextInput
              register={register("size", {
                required: true,
                minLength: 1,
              })}
              type="text"
              name="Size"
              rows={1}
              isRequired
            />
            <TextInput
              register={register("serialNumber", {
                required: true,
                minLength: 1,
              })}
              type="text"
              name="Serial Number"
              rows={1}
              isRequired
            />

            <SelectInput
              handleChange={handleCategoryChange}
              value={selectedCategory}
              filterProperties={{ name: "Categorie", options: categories }}
            />
          </Grid>
        </Grid>
        <Grid container item>
          <Button
            type="submit"
            sx={{
              backgroundColor: "#000000",
              width: "150px",
              margin: "10px",
              height: "45px",
              color: "white",
              borderRadius: "3px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#000000",
              },
            }}
            onClick={handleSubmit(onSubmit)}
          >
            Publica Anunt
          </Button>
        </Grid>
      </form>
    </Grid>
  );

  if (redirectToHomePage) {
    return <Navigate to="/" />;
  }
  return (
    <Grid sx={{ paddingBottom: "50px" }}>
      <Box component="h3">Publica un obiect furat</Box>
      <ImageUpload setImgUrl={setImgUrl} />
      {addItemForm}
    </Grid>
  );
};
export default AddAnnouncement;
