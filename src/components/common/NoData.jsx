import { Box } from "@mui/material";
import Lottie from "react-lottie";
import noData from "../../files/Lottie/NoData.json";

const NoData = ({ colSpan = "1 / 3", width = "35%" }) => {
  return (
    <Box gridColumn={colSpan} width={width} m="1rem auto">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: noData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
      >
        NoData
      </Lottie>
    </Box>
  );
};
export default NoData;
