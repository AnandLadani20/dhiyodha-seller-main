import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

export const CustomAutoComplete = ({ control, label = "", name = "", error, options, placeholder = "", isLoading, ...rest }) => {
  return (
    <Box minHeight="min(10.5vh,5.5rem)">
      <Typography pb={0.3} color="text.secondary">
        {label}
      </Typography>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, name, value } }) => (
          <Autocomplete
            onBlur={onBlur}
            onChange={(e, v) => {
              onChange(v);
            }}
            options={options || []}
            value={value}
            renderInput={(params) => {
              return <TextField placeholder={placeholder} {...params} error={Boolean(error)} helperText={error} />;
            }}
            loading={isLoading}
            {...rest}
          />
        )}
      />
    </Box>
  );
};

const CustomInput = ({ label = "", register = {}, error, placeholder = "", boxProps, labelProps, ...rest }) => {
  return (
    <Box minHeight="min(10.5vh,5.5rem)" {...boxProps}>
      <Typography pb={0.3} color="text.secondary" {...labelProps}>
        {label}
      </Typography>
      <TextField {...register} helperText={error} error={Boolean(error)} placeholder={placeholder} {...rest} />
    </Box>
  );
};

export default CustomInput;
