import React from "react";
import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/material";

const styles = (): Record<string, SxProps | undefined> => ({
  textInput: {
    borderRadius: "3px",
    fontSize: "16px",
    backgroundColor: "white",
    alignItems: "flex-start",
    padding: 0,
    height: "100%",
    "& textarea": {
      height: "99px",
      padding: "10px",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #00ABAD",
      boxShadow: "0 0 4px 0 #00ABADCC",
    },
    "& input::placeholder": {
      opacity: 1,
      color: "#909090",
    },
  },
  hide: {
    display: "none",
  },
  marginRight: {
    marginRight: "15px",
  },
});

interface IInputFormProps {
  type: string;
  register?: any;
  name: string;
  onChange?: (value: any) => any;
  defaultValue?: string;
}

const TextInput: React.FC<IInputFormProps> = (props) => {
  const { type, register, name, onChange, defaultValue } = props;
  const classes = styles();

  const handleChange = (event: { target: { value: any } }) => {
    if (onChange) {
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
      onChange={handleChange}
      InputProps={{
        classes: { root: classes.textInput },
      }}
    />
  );
};
export default TextInput;
