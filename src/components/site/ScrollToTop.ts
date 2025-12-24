"use client";

import { useUpdateEffect } from "ahooks";
import { usePathname } from "next/navigation";

export const ScrollToTop = () => {
  const pathname = usePathname();

  useUpdateEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash;
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
  }, [pathname]);

  return null;
};
