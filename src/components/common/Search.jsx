import { TextField } from "@mui/material";
// import debounce from "lodash.debounce";
import { useState } from "react";
import { useEffect } from "react";

const Search = ({
  setFilter,
  filter = "",
  variant = "standard",
  InputProps,
  placeholder = "Search",
}) => {
  const [value, setValue] = useState(filter);

  useEffect(() => {
    setValue(filter);
  }, [filter]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setFilter(value);
      }}
    >
      <TextField
        value={value}
        variant={variant}
        InputProps={InputProps}
        onChange={(e) => setValue(e.target.value.trim())}
        placeholder={placeholder}
      />
    </form>
  );
};
export default Search;
