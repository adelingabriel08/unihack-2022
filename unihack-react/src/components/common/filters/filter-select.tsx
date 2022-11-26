import React from "react";
import Grid from "@mui/material/Grid";
import { IFilterProperties } from "../../../interfaces";
import SelectInput from "../inputs/select-input";

const FilterSelect = (props: {
  type: string;
  handleChange: any;
  value: string;
  filterProperties: IFilterProperties;
}) => {
  const { type, handleChange, value, filterProperties } = props;

  return (
    <Grid container alignItems="center" sx={{ padding: "5px" }}>
      <SelectInput
        type={type}
        handleChange={handleChange}
        value={value}
        filterProperties={filterProperties}
      />
    </Grid>
  );
};

export default FilterSelect;
