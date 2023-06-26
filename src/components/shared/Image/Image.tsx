import { useState } from "react";
interface Props {
  src?: string | undefined;
  height?: number;
  width?: number;
  alt: string | undefined;
  className?: string | undefined;
}

const EMPTY_IMAGE_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

function Image({ src, height, width, className }: Props) {
  const [status, setStatus] = useState<"pending" | "fulfilled" | "error" | "idle">("idle");

  const onLoaded = (e: any) => {
    setStatus("fulfilled");
  };

  const onError = () => {
    setStatus("error");
  };

  return <img src={src} onLoad={onLoaded} onError={onError} style={{ height, width }} className={className} />;
}

export default Image;
