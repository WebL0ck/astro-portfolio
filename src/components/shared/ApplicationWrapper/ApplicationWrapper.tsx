import classNames from "classnames";

import Box from "../Box/Box";

interface Props {
  className?: string | undefined;
  wrapperClassName?: string | undefined;
  children?: any;
}

function ApplicationWrapper({ children, className, wrapperClassName }: Props) {
  return (
    <Box
      className={classNames(
        {
          "border-gray-8 border border-solid rounded-lg backdrop-blur-lg bg-blurry-3": true,
        },
        className
      )}
    >
      <Box className="h-[30px] border-b border-solid  border-b-gray-8 flex justify-between items-center p-4">
        <Box className="flex gap-2">
          <Box className="rounded-full bg-gray-8 w-[10px] h-[10px]" />
          <Box className="rounded-full bg-gray-8 w-[10px] h-[10px]" />
          <Box className="rounded-full bg-gray-8 w-[10px] h-[10px]" />
        </Box>
        <Box className="w-[46px]" />
      </Box>
      <Box
        className={classNames(
          {
            "min-h-[100px] px-5 py-3": true,
          },
          wrapperClassName
        )}
      >
        {children}
      </Box>
    </Box>
  );
}

export default ApplicationWrapper;
