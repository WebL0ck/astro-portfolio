interface Props {
  children: string;
}

function Typography({ children, ...rest }: Props) {
  return <p {...rest}>{children}</p>;
}

export default Typography;
