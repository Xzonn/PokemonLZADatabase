import cn from "classnames";
import { FC, useContext } from "react";

import { TocContext } from "./TocObserver";

interface ITableOfContentsProps {
  onClick?: () => void;
}

export const TableOfContents: FC<ITableOfContentsProps> = ({ onClick }) => {
  const { tocItems, activeId } = useContext(TocContext)!;

  const isActive = (id: string) => activeId === id;

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="nav-content">
      {tocItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            handleClick(item.id);
            onClick?.();
          }}
          className={cn("nav-item", isActive(item.id) ? "nav-item-active" : "")}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};
