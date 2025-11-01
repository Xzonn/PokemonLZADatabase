import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Tabs, TabsProps } from "antd";
import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { Navigation } from "./Navigation";
import { TableOfContents } from "./TableOfContents";
import { TocContext } from "./TocObserver";
import { SearchBar } from "../search/SearchBar";

interface IHeaderProps {
  showDrawer: boolean;
}

export const Header: FC<IHeaderProps> = ({ showDrawer }) => {
  const [show, setShow] = useState(false);
  const { tocItems } = useContext(TocContext)!;

  useEffect(() => {
    setShow(false);
  }, [showDrawer]);

  const items: TabsProps["items"] = useMemo(
    () => [
      {
        key: "nav-site",
        label: "站内导航",
        children: <Navigation onClick={() => setShow(false)} />,
      },
      ...(tocItems.length > 0
        ? [
            {
              key: "nav-toc",
              label: "目录",
              children: <TableOfContents onClick={() => setShow(false)} />,
            },
          ]
        : []),
    ],
    [tocItems.length],
  );

  return (
    <>
      <header>
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
      </header>
      <Drawer
        destroyOnHidden={true}
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
        <Tabs items={items} />
      </Drawer>
    </>
  );
};
