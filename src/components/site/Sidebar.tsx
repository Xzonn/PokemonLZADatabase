import {
  HomeOutlined,
  SortDescendingOutlined,
  ThunderboltOutlined,
  // UnorderedListOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "首页", icon: <HomeOutlined /> },
    // { path: "/宝可梦一览", label: "宝可梦一览", icon: <UnorderedListOutlined /> },
    { path: "/招式一览", label: "招式一览", icon: <ThunderboltOutlined /> },
    { path: "/训练家一览", label: "训练家一览", icon: <UserSwitchOutlined /> },
    { path: "/ＺＡ登峰战", label: "ＺＡ登峰战", icon: <SortDescendingOutlined /> },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return decodeURIComponent(location.pathname).startsWith(path);
  };

  return (
    <>
      <Drawer
        title="网站导航"
        open={isOpen}
        placement="left"
        onClose={() => setIsOpen(false)}
      />

      {/* 移动端切换按钮 */}
      {/* <button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 left-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Toggle sidebar"
      >
        <MenuOutlined className="text-xl" />
      </button> */}

      {/* 侧边栏 */}
      <aside className="w-64 px-4 py-8 z-40 hidden md:block">
        <nav className="p-4 bg-white shadow-lg">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${isActive(item.path) ? "bg-primary text-white font-semibold" : "text-gray-700 hover:bg-gray-100"}
                `}
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
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
