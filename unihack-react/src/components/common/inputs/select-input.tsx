import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box, SxProps, Theme, useTheme } from "@mui/material";
import { IFilterProperties } from "../../../interfaces";

const styles = (theme: Theme): Record<string, SxProps | undefined> => ({
  filter: {
    height: "100%",
    borderRadius: "6px",
    border: 0,
    width: "150px",
    fontSize: "14px",
    backgroundColor: "#FFFFFF",
    outline: "none",
    "& .MuiSelect-select": {
      height: "100%",
      padding: "29px 28px 0 15px",
      [theme.breakpoints.down("md")]: {
        padding: "0 10px 0 15px",
        display: "flex",
      },
      alignItems: "center",
      "&:focus": {
        backgroundColor: "transparent",
      },
    },
    "& .MuiSelect-icon": {
      right: "5px",
    },
    "&::placeholder": {
      color: "#909090",
      fontSize: "14px",
    },
    // "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    //   "-webkit-appearance": "none",
    //   display: "none",
    // },
  },
  input: {
    width: "100%",
    height: "48px",
    float: "left",
    border: "1px solid #DDDDDD",
    fontSize: "14px",
    borderRadius: "6px",
    display: "flex",
    padding: "0",
    backgroundColor: "#FFFFFF",
  },
  colorPlaceHolder: {
    color: "#909090",
  },
});

const SelectInput = (props: {
  type: string;
  handleChange: any;
  value: string;
  filterProperties: IFilterProperties;
}) => {
  const { type, handleChange, value, filterProperties } = props;
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <Box sx={classes.input}>
      <Select
        variant="standard"
        name={type}
        disableUnderline
        onChange={handleChange}
        value={value}
        sx={classes.filter}
        placeholder={type}
      >
        {filterProperties.options!.map((option: any) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectInput;
