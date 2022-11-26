import React, { useEffect } from "react";
import { debounce } from "lodash";
import { Grid, TextField } from "@mui/material";

const DebounceInput = (props: { handleChange: any }) => {
  const { handleChange } = props;

  const debouncedChangeHandler = debounce(async (event: any) => {
    handleChange(event);
  }, 1000);

  useEffect(
    () => () => {
      debouncedChangeHandler.cancel();
    },
    []
  );

  return (
    <Grid container xs={12} item>
      <TextField
        id="outlined-basic"
        label="Cautare"
        variant="outlined"
        onChange={debouncedChangeHandler}
      />
    </Grid>
  );
};

export default DebounceInput;
