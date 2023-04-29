import classNames from "classnames";

import Typography from "./Typography";

interface Props {
  children?: React.ReactElement | string | undefined;
  className?: string | undefined;
}

function GradientTypography({ children, className }: Props) {
  return (
    <Typography
      element="span"
      className={classNames({
        "animate-gradient bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ease-in-out": true,
        "from-blue-gradient-1 via-blue-gradient-1 to-blue-gradient-2": true,
        className,
      })}
    >
      {children}
    </Typography>
  );
}

export default GradientTypography;
