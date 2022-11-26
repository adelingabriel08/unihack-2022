import React from "react";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";

interface ITextInputProps {
  type: string;
  register?: any;
  name: string;
  isRequired?: boolean;
  rows: number;
  onChange?: (value: any) => any;
  defaultValue?: string;
  selectValues?: string[];
}

const TextInput: React.FC<ITextInputProps> = (props) => {
  const {
    type,
    register,
    name,
    rows,
    onChange,
    defaultValue,
    isRequired,
    selectValues,
  } = props;

  const handleChange = (event: { target: { value: any } }) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  console.log(selectValues);

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
      required={isRequired}
    />
  );
};
export default TextInput;
