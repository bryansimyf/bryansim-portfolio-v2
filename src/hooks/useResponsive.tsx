import { useCallback, useEffect, useState } from "react";

const useResponsive = () => {
  const debounceTime = 250;

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleResize = useCallback(() => {
    let timeoutId: NodeJS.Timeout;

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, debounceTime);
    };
  }, [debounceTime]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setWindowWidth(window.innerWidth);

    const debouncedHandler = handleResize();

    window.addEventListener("resize", debouncedHandler);

    return () => {
      window.removeEventListener("resize", debouncedHandler);
    };
  }, [handleResize]);

  return { windowWidth };
};

export default useResponsive;
