import {
  BulbOutlined,
  FileExclamationOutlined,
  FileSearchOutlined,
  // GlobalOutlined,
  HomeOutlined,
  SortDescendingOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  // UnorderedListOutlined,
  UserSwitchOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import cn from "classnames";
import React from "react";
import { useLocation } from "react-router-dom";

import { Link } from "@/utils";

const navItems = [
  { path: "/", label: "首页", icon: <HomeOutlined /> },
  // { path: "/宝可梦一览", label: "宝可梦一览", icon: <UnorderedListOutlined /> },
  { path: "/招式一览", label: "招式一览", icon: <ThunderboltOutlined /> },
  { path: "/道具一览", label: "道具一览", icon: <WalletOutlined /> },
  { path: "/招式学习器一览", label: "招式学习器一览", icon: <BulbOutlined /> },
  { path: "/训练家一览", label: "训练家一览", icon: <UserSwitchOutlined /> },
  { path: "/ＺＡ登峰战", label: "ＺＡ登峰战", icon: <SortDescendingOutlined /> },
  { path: "/茉蜜姬调查", label: "茉蜜姬调查", icon: <FileSearchOutlined /> },
  { path: "/副任务一览", label: "副任务一览", icon: <FileExclamationOutlined /> },
  { path: "/i/彩色螺丝", label: "彩色螺丝", icon: <ToolOutlined /> },
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
          <span className="nav-item-icon">{item.icon}</span>
          <span className="nav-item-label">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};
