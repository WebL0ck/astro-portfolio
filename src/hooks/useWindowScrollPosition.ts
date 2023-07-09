import { useEffect, useState } from "react";

type ScrollPosition = {
  scrollX: number;
  scrollY: number;
};

export const useWindowScrollPosition = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollX: 0,
    scrollY: 0,
  });

  const handleScroll = (): void => {
    const currentScrollPosition: ScrollPosition = {
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    };
    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};
