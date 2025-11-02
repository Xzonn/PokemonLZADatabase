import cn from "classnames";
import React from "react";
import { useLocation } from "react-router-dom";

import { NAVIGATION_ITEMS } from "@/data";
import { Icon, Link } from "@/utils";

interface INavigationProps {
  onClick?: () => void;
}

export const Navigation: React.FC<INavigationProps> = ({ onClick }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return decodeURIComponent(location.pathname).startsWith(path);
  };

  return (
    <div className="nav-content">
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={onClick}
          className={cn("nav-item", isActive(item.path) ? "nav-item-active" : "")}
        >
          <span className="nav-item-icon">
            <Icon name={`${item.icon}-${isActive(item.path) ? "white" : "black"}`} />
          </span>
          <span className="nav-item-label">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};
