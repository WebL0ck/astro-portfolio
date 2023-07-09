interface Props {
  children?: any;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function Box({ children, className, style, ...rest }: Props) {
  return (
    <div className={className} style={style} {...rest}>
      {children}
    </div>
  );
}

export default Box;
