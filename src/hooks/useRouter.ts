import { useState, useEffect } from "react";

export const useRouter = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    const handleRouteChange = () => {
      setPath(window.location.pathname);
    };

    // Add event listener to handle route changes
    window.addEventListener("popstate", handleRouteChange);

    // Manually setting path on mount, because we using server rendering
    handleRouteChange();

    return () => {
      // Cleanup the event listener on unmount
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const push = (url: string) => {
    window.history.pushState({}, "", url);
    setPath(url);
  };

  const replace = (url: string) => {
    window.history.replaceState({}, "", url);
    setPath(url);
  };

  return {
    path,
    push,
    replace,
  };
};
