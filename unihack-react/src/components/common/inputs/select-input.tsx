import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";
import { IFilterProperties } from "../../../interfaces";

const SelectInput = (props: {
  handleChange: any;
  value: string;
  filterProperties: IFilterProperties;
}) => {
  const { handleChange, value, filterProperties } = props;

  return (
    <FormControl fullWidth style={{ margin: "10px" }}>
      <InputLabel id="demo-simple-select-label">
        {filterProperties.name}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={filterProperties.name}
        onChange={handleChange}
      >
        {filterProperties.options?.map((filterOption) => (
          <MenuItem value={filterOption.id}>{filterOption.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
