import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  required: boolean;
  label: string;
  placeholder?: string;
  helperText?: string;
  value: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

export default function TextInput({
  required,
  placeholder,
  label,
  helperText,
  value,
  handleInputChange,
  error,
}: Props) {
  return (
    <TextField
      margin="dense"
      label={label}
      required={required}
      placeholder={placeholder}
      helperText={error ? helperText : null}
      error={error}
      value={value}
      onChange={handleInputChange}
    />
  );
}
