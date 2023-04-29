interface Props {
  children: any;
  className?: string | undefined;
}

function Box({ children, className, ...rest }: Props) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

export default Box;
