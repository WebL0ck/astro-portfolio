import Box from "@components/shared/Box/Box";
import Typography from "@components/shared/Typography/Typography";
import Image from "@components/shared/Image/Image";
import Button from "@components/shared/Button/Button";
import GradientTypography from "@components/shared/Typography/GradientTypography";

import { socialIcons } from "./footer.constants";

function Footer() {
  return (
    <footer className="h-[200px] p-[30px] mt-72 border-t border-solid  border-t-gray-8 bg-black-2 flex flex-col justify-between">
      <Box className="flex items-center gap-3">
        <Image src="icons/logo.svg" alt="logo" width={73} height={38} />
        <Typography className="text-gray-2">-</Typography>
        <Typography className="text-gray-2">
          i love simplicity, trying to be creative, and don't forget about productivity
        </Typography>
      </Box>
      <Box className="flex gap-4">
        <Button className="h-[45px] w-[140px] bg-black-2" withHover={false} withBorder={false} withGradient={true}>
          <GradientTypography color="orange">Resume</GradientTypography>
        </Button>
        {socialIcons.map((socialIcon) => (
          <Button
            key={socialIcon.name}
            withBorder={false}
            className="group h-[45px] w-[45px] bg-gray-5 hover:bg-gray-4"
          >
            <Image
              src={socialIcon.icon}
              alt={socialIcon.name}
              width={24}
              height={24}
              className="brightness-125 group-hover:brightness-200 transition duration-300 ease"
            />
          </Button>
        ))}
      </Box>
    </footer>
  );
}

export default Footer;
