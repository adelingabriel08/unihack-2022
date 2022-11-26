import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { FormState, UseFormRegister } from "react-hook-form/dist/types/form";
import TextInput from "../common/text-input";
import { Box, SxProps } from "@mui/material";
import { IUser } from "../../interfaces/user";

const styles = (): Record<string, SxProps | undefined> => ({
  errorMessage: {
    color: "red",
    fontSize: "12px",
    textAlign: "right",
    paddingRight: "40px",
  },
  button: {
    backgroundColor: "#000000",
    width: "100%",
    margin: "20px 0 0",
    height: "35px",
    color: "white",
    borderRadius: "3px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#000000",
    },
  },
});

interface IProps {
  handleSubmit: () => void;
  register: UseFormRegister<IUser>;
  formState: FormState<IUser>;
  buttonText: string;
  message?: string;
}

const LoginForm: React.FC<IProps> = (props) => {
  const classes = styles();
  const { register, handleSubmit, formState, buttonText, message } = props;

  return (
    <Grid container>
      <Box component="form" noValidate autoComplete="off">
        <Grid container item justifyContent="center" direction="column">
          <h2 style={{ alignSelf: "center" }}>Login</h2>
          <Grid item xs={12} sx={{ alignSelf: "center" }}>
            <TextInput
              errors={formState.errors}
              formState={formState}
              register={register("email", {
                required: true,
                minLength: 3,
              })}
              type="text"
              name="username"
              rows={1}
              isRequired
            />
            <TextInput
              errors={formState.errors}
              formState={formState}
              register={register("password", {
                required: true,
                minLength: 1,
              })}
              type="password"
              name="password"
              rows={1}
              isRequired
            />
          </Grid>
        </Grid>
        <Grid item sx={classes.errorMessage}>
          {message}
        </Grid>
        <Grid container item alignItems="center" justifyContent="center">
          <Grid item sm={6} xs={12} container justifyContent="flex-end">
            <Button type="submit" sx={classes.button} onClick={handleSubmit}>
              {buttonText}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default LoginForm;
