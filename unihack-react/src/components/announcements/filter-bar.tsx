import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  IFilterOption,
  IFilterProperties,
  IStolenItemType,
} from "../../interfaces";
import SelectInput from "../common/inputs/select-input";
import DebounceInput from "../common/inputs/debounce-input";
import { getStolenItems, getStolenTypes } from "../../utils/api-service";

const categoryFilter: IFilterProperties = {
  name: "Categorie",
  options: [],
};
const locationFilter: IFilterProperties = {
  name: "Locatie",
  options: [
    { name: "Timis", id: 1 },
    { name: "Bihor", id: 2 },
  ],
};

const FilterBar = () => {
  const [categoryFilterValue, setCategoryFilterValue] = useState("");
  const [locationFilterValue, setLocationFilterValue] = useState("");
  const [categories, setCategories] = useState<IFilterOption[]>([]);
  const [searchValue, setsearchValue] = useState("");

  const handleCategoryChange = (event: { target: { value: string } }) => {
    setCategoryFilterValue(event?.target.value);
  };
  const handleLocationChange = (event: { target: { value: string } }) => {
    setLocationFilterValue(event?.target.value);
  };
  const handleSearchChange = (event: { target: { value: string } }) => {
    setsearchValue(event?.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    getStolenItems(searchValue, locationFilterValue, categoryFilterValue);
  }, [searchValue, locationFilterValue, categoryFilterValue]);

  useEffect(() => {
    getStolenTypes().then((result) => {
      console.log(result);
      setCategories(result);
    });
  }, []);

  return (
    <Grid container alignItems="center" sx={{ padding: "5px" }} spacing="10">
      <Grid item xs>
        <DebounceInput handleChange={handleSearchChange} />
      </Grid>
      <Grid item xs={2}>
        <SelectInput
          handleChange={handleCategoryChange}
          value={categoryFilterValue}
          key={categoryFilter.name}
          filterProperties={{ name: categoryFilter.name, options: categories }}
        />
      </Grid>
      <Grid item xs={2}>
        <SelectInput
          key={locationFilter.name}
          handleChange={handleLocationChange}
          value={locationFilterValue}
          filterProperties={locationFilter}
        />
      </Grid>
    </Grid>
  );
};
export default FilterBar;
