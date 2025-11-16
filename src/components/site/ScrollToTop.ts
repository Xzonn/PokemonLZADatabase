import { useUpdateEffect } from "ahooks";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useUpdateEffect(() => {
    setTimeout(() => {
      const element = hash ? document.querySelector(decodeURIComponent(hash)) : null;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  }, [pathname, hash]);

  return null;
};
