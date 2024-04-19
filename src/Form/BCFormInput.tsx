"use client";

import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "medium";
  fullWidth?: boolean;
  placeholder?: string;
  required?: boolean;
};

const BCFormInput = ({
  name,
  label,
  type,
  size = "medium",
  fullWidth,
  required,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="filled"
          size={size}
          fullWidth={fullWidth}
          placeholder={label}
          required={required}
        />
      )}
    />
  );
};

export default BCFormInput;
