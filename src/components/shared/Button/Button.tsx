import classNames from "classnames";

import Box from "../Box/Box";

interface Props {
  children?: any;
  withBorder?: boolean;
  withHover?: boolean;
  withTransition?: boolean;
  withGradient?: boolean;
  className?: string | undefined;
  onClick?: () => void;
}

function Button({
  children,
  withGradient,
  className,
  withBorder = true,
  withHover = true,
  withTransition = true,
  onClick,
}: Props) {
  const renderButton = () => (
    <button
      className={classNames(
        {
          "z-0 flex justify-center items-center rounded cursor-pointer": true,
          "border border-solid border-white px-8 py-2": withBorder,
          "hover:bg-blurry-2": withHover,
          "transition duration-300 ease": withTransition,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (withGradient) {
    return (
      <Box className="rounded shadow-button hover:shadow-button-active transition duration-500 ease animate-gradient bg-gradient-to-r from-orange-gradient-1 via-orange-gradient-1 to-orange-gradient-2 p-[1px]">
        {renderButton()}
      </Box>
    );
  }

  return renderButton();
}

export default Button;
