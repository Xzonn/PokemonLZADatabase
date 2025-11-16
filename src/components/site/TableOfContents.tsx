import cn from "classnames";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TocContext } from "./TocObserver";

interface ITableOfContentsProps {
  onClick?: () => void;
}

export const TableOfContents: FC<ITableOfContentsProps> = ({ onClick }) => {
  const { tocItems, activeId } = useContext(TocContext)!;

  const isActive = (id: string) => activeId === id;
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate({ hash: id }, { replace: true });
  };

  return (
    <div className="nav-content">
      {tocItems.map((item) => (
        <a
          href={`#${item.id}`}
          key={item.id}
          onClick={(event) => {
            event.preventDefault();
            handleClick(item.id);
            onClick?.();
          }}
          className={cn("nav-item", isActive(item.id) ? "nav-item-active" : "")}
        >
          {item.text}
        </a>
      ))}
    </div>
  );
};
