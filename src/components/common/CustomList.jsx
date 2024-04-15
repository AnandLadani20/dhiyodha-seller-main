import { Box, Typography } from "@mui/material";

export const convertToArray = (data = {}, deleteKey = []) => {
  deleteKey.forEach((key) => delete data?.[key]);

  return Object.keys(data).map((key) => ({ key, value: data?.[key] }));
};

const CustomList = ({ object, columns = 1, keyWidth = ["150px"], px = 0.7, py = 1, variant = "body2", deleteKey }) => {
  const array = convertToArray(object, deleteKey);
  if (array.length < 1) {
    return (
      <Typography px={px} py={py} bgcolor="#0F2033" variant={variant} textAlign="center">
        No data
      </Typography>
    );
  }

  return (
    <>
      {Array.from(Array(Math.ceil(array.length / columns)).keys()).map((key, index) => {
        return (
          <Box display="grid" gridTemplateColumns={`repeat(${columns} ,1fr)`} borderBottom="1px solid rgba(31, 41, 55, 0.5)" key={index}>
            {array.slice(columns * key, columns * key + columns).map((arr, in1) => (
              <Box display="grid" gridTemplateColumns={`${keyWidth[in1] || keyWidth[0]} 1fr`} key={in1} p={p}>
                <Typography variant={variant} textTransform="capitalize">
                  {arr.key.replaceAll("_", " ")}
                </Typography>
                <Typography color="text.secondary" textTransform="capitalize" variant={variant}>
                  :<span style={{ paddingLeft: "10px" }}>{arr.value}</span>
                </Typography>
              </Box>
            ))}
          </Box>
        );
      })}
    </>
  );
};
export default CustomList;
