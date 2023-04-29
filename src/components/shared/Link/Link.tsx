interface Props {
  href?: string;
  prefetch?: boolean;
  children: React.ReactElement | string;
  className?: string | undefined;
}

function Link({ href = "/", prefetch = true, children, className, ...rest }: Props) {
  return (
    <a href={href} rel={prefetch ? "prefetch" : undefined} className={className} {...rest}>
      {children}
    </a>
  );
}

export default Link;
