import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { SxProps, Theme, useTheme } from "@mui/material/styles";

const styles = (theme: Theme): Record<string, SxProps | undefined> => ({
  formInput: {
    backgroundColor: "white",
    height: "36px",
    marginBottom: "10px",
    fontSize: "16px",
    [theme.breakpoints.up("md")]: {
      marginBottom: "5px",
    },
    "&.MuiOutlinedInput-adornedEnd": {
      padding: "5px",
    },
    "& input::placeholder": {
      opacity: 1,
      color: "#60606080",
    },
  },
  formInputCorrect: {
    "&.Mui-focused fieldset": {
      border: "1px solid gray !important",
      boxShadow: "0 0 4px 0 gray",
    },
  },
  formInputError: {
    "&.Mui-focused fieldset": {
      border: "1px solid red !important",
      boxShadow: "0 0 4px 0 red",
    },
  },
  errorIcon: {
    color: "red",
  },
  correctIcon: {
    color: "green",
  },
});

interface IValidationIconProps {
  isInvalid: boolean;
  isShowed: boolean;
  classes: any;
}

interface ITextInputProps {
  type: string;
  errors?: any;
  formState?: any;
  register?: any;
  name: string;
  isRequired: boolean;
  rows: number;
  onChange?: (value: any) => any;
  defaultValue?: string;
  selectValues?: string[];
}

const ValidationIcon: React.FC<IValidationIconProps> = ({
  isInvalid,
  isShowed,
  classes,
}) =>
  isShowed && isInvalid ? (
    <ErrorOutlineIcon sx={classes.errorIcon} />
  ) : (
    <CheckCircleOutlineIcon sx={classes.correctIcon} />
  );

const TextInput: React.FC<ITextInputProps> = (props) => {
  const {
    type,
    errors,
    formState,
    register,
    name,
    isRequired,
    rows,
    onChange,
    defaultValue,
  } = props;
  const theme = useTheme();
  const classes = styles(theme);
  const [formValue, setFormValue] = React.useState(defaultValue);

  const handleChange = (event: { target: { value: any } }) => {
    if (onChange) {
      setFormValue(event.target.value);
      onChange(event.target.value);
    }
  };

  return (
    <TextField
      name={name}
      {...register}
      defaultValue={defaultValue}
      variant="outlined"
      fullWidth
      placeholder={name}
      type={type}
      multiline={rows > 1}
      onChange={handleChange}
      InputProps={{
        classes: {
          root:
            name in errors
              ? `${classes.formInput} ${classes.formInputError}`
              : `${classes.formInput} ${classes.formInputCorrect}`,
        },
        endAdornment: (
          <InputAdornment position="end">
            {isRequired && (
              <ValidationIcon
                isInvalid={name in errors}
                isShowed={formState.submitCount > 0}
                classes={classes}
              />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};
export default TextInput;
