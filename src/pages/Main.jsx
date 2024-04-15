import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
  return (
    <Box>
      <Box
        height={70}
        gap={1.5}
        pl={3}
        boxShadow={3}
        bgcolor="background.paper"
        display="grid"
        alignItems="center"
        gridTemplateColumns="45px 1fr repeat(1,auto)"
      >
        <Header />
      </Box>
      <Box
        height="calc(100vh - 70px - 3vh)"
        position="relative"
        mt={3}
        px={3}
        pb={3}
        overflow="auto"
      >
        <Outlet />
      </Box>
    </Box>
  );
};
export default Main;
