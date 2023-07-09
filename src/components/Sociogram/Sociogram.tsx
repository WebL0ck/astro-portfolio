import Box from "@components/shared/Box/Box";
import Typography from "@components/shared/Typography/Typography";
import ApplicationWrapper from "@components/shared/ApplicationWrapper/ApplicationWrapper";
import DeviceWrapper from "@components/shared/DeviceWrapper/DeviceWrapper";
import Image from "@components/shared/Image/Image";
import Link from "@components/shared/Link/Link";

import { WORK_ROUTES } from "../../routes/routes.constants";
import { WORKS } from "../../api/works/works.api";

function Sociogram() {
  return (
    <Box className="mt-60 flex justify-between">
      <Box className="h-auto flex gap-5 flex-col justify-center items-center">
        <Link href={WORK_ROUTES.SOCIOGRAM}>
          <Typography className="text-3xl font-bold flex gap-2">
            <Image
              src={WORKS.SOCIOGRAM.images.logo}
              alt="sociogram logo"
              width={27}
              height={40}
            />
            {WORKS.SOCIOGRAM.title}
          </Typography>
        </Link>
        <ApplicationWrapper
          className="w-[500px]"
          wrapperClassName="flex flex-col gap-3"
        >
          <Box>
            <Box className="flex gap-3">
              <Typography className="text-gray-1 w-[63px] text-sm">
                stack:
              </Typography>
              <Box className="flex gap-2">
                {WORKS.SOCIOGRAM.tags.map((tag) => (
                  <Typography
                    href={tag.href}
                    className="text-blue cursor-pointer text-sm"
                  >
                    #{tag.title}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box className="flex gap-3">
              <Typography className="text-gray-1 w-[63px] text-sm">
                position:
              </Typography>
              <Typography className="text-sm">
                {WORKS.SOCIOGRAM.position}
              </Typography>
            </Box>
          </Box>
          <Typography className="text-sm font-light">
            {WORKS.SOCIOGRAM.description}
          </Typography>
        </ApplicationWrapper>
      </Box>
      <Box className="w-[780px] relative">
        <DeviceWrapper className="absolute w-[270px] left-[-50px] top-[70px] rounded-[48px] hover:z-10 hover:scale-[1.03] transition duration-300 ease">
          <Image
            src={WORKS.SOCIOGRAM.images.mobile}
            alt="sociogram website preview"
            className="w-full h-full object-cover rounded-[36px]"
          />
        </DeviceWrapper>
        <DeviceWrapper className="rounded-[30px] h-[518px] hover:z-10 z-0 relative hover:scale-[1.03] transition duration-300 ease">
          <Image
            src={WORKS.SOCIOGRAM.images.desktop}
            alt="sociogram website preview"
            className="w-full h-full object-cover rounded-[18px]"
          />
        </DeviceWrapper>
      </Box>
    </Box>
  );
}

export default Sociogram;
