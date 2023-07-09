import Box from "@components/shared/Box/Box";
import Typography from "@components/shared/Typography/Typography";
import ApplicationWrapper from "@components/shared/ApplicationWrapper/ApplicationWrapper";
import DeviceWrapper from "@components/shared/DeviceWrapper/DeviceWrapper";
import Image from "@components/shared/Image/Image";
import Link from "@components/shared/Link/Link";

import { WORK_ROUTES } from "../../routes/routes.constants";
import { WORKS } from "../../api/works/works.api";

function MyEyeDr() {
  return (
    <Box className="mt-72 flex justify-between">
      <Box className="h-auto flex gap-5 flex-col justify-center items-center">
        <Link href={WORK_ROUTES.MYEYEDR}>
          <Typography className="text-3xl font-bold flex gap-2">
            <Image src={WORKS.MYEYEDR.images.logo} alt="myeyedr logo" />
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
                {WORKS.MYEYEDR.tags.map((tag) => (
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
                {WORKS.MYEYEDR.position}
              </Typography>
            </Box>
          </Box>
          <Typography className="text-sm font-light">
            {WORKS.MYEYEDR.description}
          </Typography>
        </ApplicationWrapper>
      </Box>
      <Box className="gap-5 relative flex justify-between">
        <DeviceWrapper className="w-[270px] h-[535px] rounded-[48px] hover:z-10 hover:scale-[1.03] transition duration-300 ease">
          <Image
            src={WORKS.MYEYEDR.images.mobile_1}
            alt="sociogram website preview"
            className="w-full h-full object-cover rounded-[36px]"
          />
        </DeviceWrapper>
        <DeviceWrapper className="mt-10 w-[270px] h-[535px] rounded-[48px] hover:z-10 hover:scale-[1.03] transition duration-300 ease">
          <Image
            src={WORKS.MYEYEDR.images.mobile}
            alt="sociogram website preview"
            className="w-full h-full object-cover rounded-[36px]"
          />
        </DeviceWrapper>
        <DeviceWrapper className="mt-20 w-[270px] h-[535px] rounded-[48px] hover:z-10 hover:scale-[1.03] transition duration-300 ease">
          <Image
            src={WORKS.MYEYEDR.images.mobile_2}
            alt="sociogram website preview"
            className="w-full h-full object-cover rounded-[36px]"
          />
        </DeviceWrapper>
      </Box>
    </Box>
  );
}

export default MyEyeDr;
