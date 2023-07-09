import Box from "@components/shared/Box/Box";
import Typography from "@components/shared/Typography/Typography";
import ApplicationWrapper from "@components/shared/ApplicationWrapper/ApplicationWrapper";
import DeviceWrapper from "@components/shared/DeviceWrapper/DeviceWrapper";
import Image from "@components/shared/Image/Image";
import Link from "@components/shared/Link/Link";

import { WORK_ROUTES } from "../../routes/routes.constants";
import { WORKS } from "../../api/works/works.api";

function BattlePro() {
  return (
    <Box className="mt-72 flex justify-between">
      <Box className="w-[780px] relative">
        <DeviceWrapper className="absolute w-[270px] right-[-50px] top-[70px] rounded-[48px] hover:z-10 hover:scale-[1.03] transition duration-300 ease">
          <Image
            src={WORKS.BATTLEPRO.images.mobile}
            alt="sociogram website preview"
            className="w-full h-full object-cover rounded-[36px]"
          />
        </DeviceWrapper>
        <DeviceWrapper className="rounded-[30px] h-[500px] hover:z-10 z-0 relative hover:scale-[1.03] transition duration-300 ease">
          <Image
            src={WORKS.BATTLEPRO.images.desktop}
            alt="sociogram website preview"
            className="w-full h-full object-cover rounded-[18px]"
          />
        </DeviceWrapper>
      </Box>
      <Box className="h-auto flex gap-5 flex-col justify-center items-center">
        <Link href={WORK_ROUTES.BATTLEPRO}>
          <Typography className="text-3xl font-bold flex gap-2">
            <Image
              src={WORKS.BATTLEPRO.images.logo}
              alt="battlepro logo"
              width={186}
              height={23}
            />
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
                {WORKS.BATTLEPRO.tags.map((tag) => (
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
                {WORKS.BATTLEPRO.position}
              </Typography>
            </Box>
          </Box>
          <Typography className="text-sm font-light">
            {WORKS.BATTLEPRO.description}
          </Typography>
        </ApplicationWrapper>
      </Box>
    </Box>
  );
}

export default BattlePro;
