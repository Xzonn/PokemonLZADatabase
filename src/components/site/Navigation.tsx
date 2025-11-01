import cn from "classnames";
import React from "react";
import { useLocation } from "react-router-dom";

import { Icon, Link } from "@/utils";

const navItems = [
  { path: "/", label: "首页", icon: "pokedex" },
  // { path: "/宝可梦一览", label: "宝可梦一览", icon: <UnorderedListOutlined /> },
  { path: "/野生特区一览", label: "野生特区一览", icon: "map" },
  { path: "/招式一览", label: "招式一览", icon: "plus" },
  { path: "/道具一览", label: "道具一览", icon: "bag" },
  { path: "/招式学习器一览", label: "招式学习器一览", icon: "bag-招式学习器" },
  { path: "/训练家一览", label: "训练家一览", icon: "battle" },
  { path: "/ＺＡ登峰战", label: "ＺＡ登峰战", icon: "royale" },
  { path: "/茉蜜姬调查", label: "茉蜜姬调查", icon: "research" },
  { path: "/副任务一览", label: "副任务一览", icon: "side-plain" },
  { path: "/i/彩色螺丝", label: "彩色螺丝", icon: "bag-重要物品" },
];

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
      {navItems.map((item) => (
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
