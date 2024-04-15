import { Box } from "@mui/material";
import Favicon from "../files/icons/Dhiyodha white.png";

const Splashscreen = ({ noRoute = false }) => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#030712"
    >
      <Box maxWidth="160px">
        <img
          src={Favicon}
          style={{ width: "100%", height: "auto" }}
          alt="dhiyodha"
        />
      </Box>
    </Box>
  );
};
export default Splashscreen;
