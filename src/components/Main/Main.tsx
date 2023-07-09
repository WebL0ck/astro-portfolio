import Box from "@components/shared/Box/Box";
import Typography from "@components/shared/Typography/Typography";
import GradientTypography from "@components/shared/Typography/GradientTypography";
import Button from "@components/shared/Button/Button";

import { convertNumberToInverseRatio } from "./utils";
import { useWindowScrollPosition } from "../../hooks/useWindowScrollPosition";

function Main() {
  const { scrollY } = useWindowScrollPosition();
  const inversedScrollRatio = convertNumberToInverseRatio(scrollY);

  return (
    <Box
      className="h-[90vh] sticky top-0 flex flex-col items-center justify-center"
      style={{
        opacity: inversedScrollRatio,
      }}
    >
      <Typography className="text-center text-5xl font-bold cursor-default">
        Hi, my name is Anton and i am a <br />
        <GradientTypography>full-stack</GradientTypography> developer
      </Typography>
      <Typography className="text-1xl mt-[20px] text-center font-medium text-gray-2 cursor-default">
        I have over 3 years of production experience, and
        <br /> primary focused on web3 technologies
      </Typography>
      <Box className="flex justify-center mt-[30px] gap-5">
        <Button>Work cases</Button>
        <Button>About me</Button>
      </Box>
    </Box>
  );
}

export default Main;
