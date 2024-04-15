import { TextField } from "@mui/material";
import debounce from "lodash.debounce";
import { useEffect } from "react";
import { useState } from "react";

const SearchDebounce = ({
  setFilter,
  filter = "",
  InputProps,
  placeholder = "Search",
}) => {
  const [value, setValue] = useState(filter);

  useEffect(() => {
    setValue(filter);
  }, [filter]);

  const debounceFunc = debounce((e) => {
    setFilter(e.target.value);
  }, 1000);

  const onChange = (e) => {
    setValue(e.target.value);
    debounceFunc.flush();
    debounceFunc(e);
  };

  return (
    <TextField
      value={value}
      InputProps={InputProps}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default SearchDebounce;
