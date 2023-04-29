interface Props {
  children?: any;
  className?: string | undefined;
  element?: "span" | "p";
}

function Typography({ children, className, element = "p", ...rest }: Props) {
  const renderRootElement = () => {
    switch (element) {
      case "span":
        return (
          <span className={className} {...rest}>
            {children}
          </span>
        );

      case "p":
      default:
        return (
          <p className={className} {...rest}>
            {children}
          </p>
        );
    }
  };

  return renderRootElement();
}

export default Typography;
