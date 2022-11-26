import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import { Box, SxProps } from "@mui/material";

const styles = (): Record<string, SxProps | undefined> => ({
  filter: {
    height: "100%",
    borderRadius: "6px",
    border: 0,
    width: "100%",
    fontSize: "14px",
    backgroundColor: "#FFFFFF",
    outline: "none",
    "&::placeholder": {
      color: "#909090",
      fontSize: "14px",
    },
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      display: "none",
    },
  },
  input: {
    width: "100%",
    height: "48px",
    float: "left",
    border: "1px solid #DDDDDD",
    fontSize: "14px",
    borderRadius: "6px",
    display: "flex",
    padding: "0 14px",
    backgroundColor: "#FFFFFF",
  },
});

const DebounceInput = (props: {
  type: string;
  handleChange: any;
  value: string;
  isTo?: boolean;
  isInteger?: boolean;
}) => {
  const { handleChange, value } = props;
  const classes = styles();

  const [inputValue, setInputValue] = useState(value);

  const debouncedChangeHandler = debounce(async (event: any) => {
    handleChange(event);
  }, 1000);

  const handleInputChange = (event: { target: { value: string } }) => {
    let newValue = event?.target.value;

    setInputValue(newValue);

    debouncedChangeHandler({
      ...event,
      target: {
        ...event.target,
        value: newValue,
      },
    });
  };

  useEffect(
    () => () => {
      debouncedChangeHandler.cancel();
    },
    []
  );

  return (
    <Box sx={classes.input}>
      <Box
        component="input"
        type="text"
        min={0}
        onChange={handleInputChange}
        sx={classes.filter}
        value={inputValue}
      />
    </Box>
  );
};

export default DebounceInput;
