import classNames from "classnames";

import Typography from "./Typography";

interface Props {
  children?: React.ReactElement | string | undefined;
  className?: string | undefined;
  color?: "blue" | "pink" | "orange";
  direction?: "top" | "right" | "bottom" | "left";
}

function GradientTypography({ children, className, color = "blue", direction = "right" }: Props) {
  const colors = {
    blue: "from-blue-gradient-1 via-blue-gradient-1 to-blue-gradient-2",
    pink: "from-pink-gradient-1 via-pink-gradient-1 to-pink-gradient-2",
    orange: "from-orange-gradient-1 via-orange-gradient-1 to-orange-gradient-2",
  };

  const directions = {
    top: "bg-gradient-to-t",
    right: "bg-gradient-to-r",
    bottom: "bg-gradient-to-b",
    left: "bg-gradient-to-l",
  };

  return (
    <Typography
      element="span"
      className={classNames(
        {
          "animate-gradient bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ease-in-out":
            true,
          className,
        },
        colors[color],
        directions[direction]
      )}
    >
      {children}
    </Typography>
  );
}

export default GradientTypography;
