import { FC, PropsWithChildren, createContext, useEffect, useRef, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  offsetTop: number;
}

const SCROLL_OFFSET = 100;

export const TocContext = createContext<{
  tocItems: TocItem[];
  activeId: string;
} | null>(null);

export const TocObserver: FC<PropsWithChildren> = ({ children }) => {
  const mainElementRef = useRef<HTMLElement | null>(null);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const updateTocItems = () => {
      if (!mainElementRef.current) {
        mainElementRef.current = document.querySelector("main");
      }
      const mainElement = mainElementRef.current;
      if (!mainElement) return;

      const headings = mainElement.querySelectorAll("h2");
      const items = Array.from(headings).map((heading, index) => {
        let id = heading.id;
        if (!id) {
          id = `heading-${index}`;
          heading.id = id;
        }
        return {
          id,
          text: heading.textContent || "",
          offsetTop: heading.offsetTop,
        } as TocItem;
      });

      setTocItems(items);
    };
    updateTocItems();

    const mainElement = mainElementRef.current!;
    const observer = new MutationObserver(() => {
      updateTocItems();
    });
    observer.observe(mainElement, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          return;
        }
      }

      setActiveId(tocItems[0]?.id || "");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tocItems]);

  return <TocContext.Provider value={{ tocItems, activeId }}>{children}</TocContext.Provider>;
};
