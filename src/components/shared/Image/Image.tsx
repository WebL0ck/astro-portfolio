interface Props {
  src?: string | undefined;
  height?: number;
  width?: number;
  alt: string | undefined;
  className?: string | undefined;
}

function Image({ src, height, width, className }: Props) {
  return <img src={src} style={{ height, width }} className={className} />;
}

export default Image;
