import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Navigation } from "./Navigation";
import { SearchBar } from "../search/SearchBar";

export const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center text-2xl font-bold text-primary"
              >
                <img
                  src="/team-mz.webp"
                  alt="Logo"
                  className="w-8 h-8 mr-2"
                />
                Z-A 数据库
              </Link>
            </div>

            <div className="hidden md:block flex-1 max-w-lg mx-8">
              <SearchBar />
            </div>

            <div className="md:hidden">
              <button
                className="p-2 hover:bg-gray-50 transition-colors"
                aria-label="切换菜单"
                onClick={() => setShow(true)}
              >
                <MenuOutlined className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Drawer
        open={show}
        onClose={() => setShow(false)}
        placement="top"
        classNames={{
          body: "flex flex-col gap-4",
        }}
        styles={{
          wrapper: { height: "100%" },
        }}
      >
        <SearchBar />
        <Navigation onClick={() => setShow(false)} />
      </Drawer>
    </>
  );
};
