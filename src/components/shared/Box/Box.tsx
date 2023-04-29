interface Props {
  children: React.ReactElement;
}

function Box({ children, ...rest }: Props) {
  return <div {...rest}>{children}</div>;
}

export default Box;
