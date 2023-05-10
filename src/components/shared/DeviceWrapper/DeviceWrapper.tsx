import Box from "../Box/Box";
import classNames from "classnames";

interface Props {
  className?: string | undefined;
  children?: any;
}

function DeviceWrapper({ className, children }: Props) {
  return (
    <Box
      className={classNames(
        {
          "border border-gray-8 border-solid p-3 bg-blurry-3 backdrop-blur-lg": true,
        },
        className
      )}
    >
      {children}
    </Box>
  );
}

export default DeviceWrapper;
