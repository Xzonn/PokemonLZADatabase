import {
  BulbOutlined,
  FileSearchOutlined,
  // GlobalOutlined,
  HomeOutlined,
  SortDescendingOutlined,
  ThunderboltOutlined,
  // UnorderedListOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import cn from "classnames";
import React from "react";
import { useLocation } from "react-router-dom";

import { Link } from "../Link";

const navItems = [
  { path: "/", label: "首页", icon: <HomeOutlined /> },
  // { path: "/宝可梦一览", label: "宝可梦一览", icon: <UnorderedListOutlined /> },
  { path: "/招式一览", label: "招式一览", icon: <ThunderboltOutlined /> },
  { path: "/招式学习器一览", label: "招式学习器一览", icon: <BulbOutlined /> },
  { path: "/训练家一览", label: "训练家一览", icon: <UserSwitchOutlined /> },
  { path: "/ＺＡ登峰战", label: "ＺＡ登峰战", icon: <SortDescendingOutlined /> },
  { path: "/茉蜜姬调查", label: "茉蜜姬调查", icon: <FileSearchOutlined /> },
  // { path: "/密阿雷地图", label: "密阿雷地图", icon: <GlobalOutlined /> },
];

export const Navigation: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return decodeURIComponent(location.pathname).startsWith(path);
  };

  return (
    <>
      <div className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClick}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              isActive(item.path) ? "bg-primary text-white font-semibold" : "text-gray-700 hover:bg-gray-100",
            )}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">快速链接</h3>
        <div className="space-y-1">
          <a
            href="https://github.com/Xzonn/PokemonLZADatabase"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span>GitHub</span>
          </a>
        </div>
      </div> */}
    </>
  );
};
