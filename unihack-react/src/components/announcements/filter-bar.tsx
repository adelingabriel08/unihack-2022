import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import FilterSelect from "../common/filters/filter-select";
import { IFilterProperties } from "../../interfaces";

export const ITEM_FILTERS: IFilterProperties[] = [
  {
    name: "categorie",
    options: ["bicicleta", "laptop"],
  },
];

const FilterBar = () => {
  const [filterValue, setFilterValue] = useState("");
  const handleChange = (event: { target: { value: string } }) => {
    setFilterValue(event?.target.value);
  };

  return (
    <Grid container>
      Categorie
      <FilterSelect
        handleChange={handleChange}
        type={ITEM_FILTERS[0].name}
        filterProperties={ITEM_FILTERS[0]}
        value={filterValue}
      />
    </Grid>
  );
};
export default FilterBar;
