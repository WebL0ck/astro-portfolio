import classNames from "classnames";

interface Props {
  children?: any;
  withBorder?: boolean;
  withHover?: boolean;
  withTransition?: boolean;
  className?: string | undefined;
  onClick?: () => void;
}

function Button({ children, className, withBorder = true, withHover = true, withTransition = true, onClick }: Props) {
  console.log("🚀 ~ Button ~ withHover:", withHover);

  return (
    <button
      className={classNames(
        {
          "z-0 flex justify-center items-center rounded": true,
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
}

export default Button;
