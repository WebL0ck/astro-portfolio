interface Props {
  src?: string | undefined;
  height: number;
  width: number;
  alt: string | undefined;
}

function Image({ src, height, width }: Props) {
  return <img src={src} style={{ height, width }} />;
}

export default Image;
