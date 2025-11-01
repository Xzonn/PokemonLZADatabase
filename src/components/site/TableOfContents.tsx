import { MenuOutlined } from "@ant-design/icons";
import { Drawer, FloatButton } from "antd";
import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  offsetTop: number;
}

// 滚动偏移常量，用于避免过早切换高亮标题
const SCROLL_OFFSET = 100;

export const TableOfContents: React.FC = () => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [showDrawer, setShowDrawer] = useState(false);
  const mainElementRef = useRef<HTMLElement | null>(null);

  // 监听页面 h2 标题变化
  useEffect(() => {
    const updateTocItems = () => {
      // 缓存 main 元素引用
      if (!mainElementRef.current) {
        mainElementRef.current = document.querySelector("main");
      }
      const mainElement = mainElementRef.current;
      if (!mainElement) return;

      const headings = mainElement.querySelectorAll("h2");
      const items: TocItem[] = [];

      headings.forEach((heading, index) => {
        let id = heading.id;
        if (!id) {
          id = `heading-${index}`;
          heading.id = id;
        }
        items.push({
          id,
          text: heading.textContent || "",
          offsetTop: heading.offsetTop,
        });
      });

      setTocItems(items);
    };

    // 初始更新
    updateTocItems();

    // 使用 MutationObserver 监听 DOM 变化
    const mainElement = mainElementRef.current;
    if (!mainElement) return;

    const observer = new MutationObserver(() => {
      updateTocItems();
    });

    observer.observe(mainElement, {
      childList: true,
      subtree: true,
    });

    // 监听窗口大小变化，重新计算位置
    const handleResize = () => {
      updateTocItems();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 监听页面滚动，高亮当前标题
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET;

      // 找到当前滚动位置对应的标题
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          return;
        }
      }

      // 如果滚动到顶部，清除高亮
      if (scrollPosition < SCROLL_OFFSET) {
        setActiveId("");
      }
    };

    handleScroll(); // 初始调用
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tocItems]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setShowDrawer(false);
    }
  };

  // 如果没有标题，不显示目录
  if (tocItems.length === 0) {
    return null;
  }

  const TocContent = () => (
    <div className="space-y-2">
      <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">目录</h3>
      {tocItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={cn(
            "w-full text-left px-4 py-2 rounded-lg transition-colors text-sm",
            activeId === item.id ? "bg-primary text-white font-semibold" : "text-gray-700 hover:bg-gray-100",
          )}
        >
          {item.text}
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* 桌面端：右侧吸顶目录 */}
      <aside className="w-64 px-4 py-8 z-40 hidden xl:block">
        <nav className="p-4 bg-white rounded-2xl shadow-xl sticky top-8">
          <TocContent />
        </nav>
      </aside>

      {/* 移动端：悬浮按钮和抽屉 */}
      <div className="xl:hidden">
        <FloatButton
          icon={<MenuOutlined />}
          type="primary"
          style={{ right: 24, bottom: 24 }}
          onClick={() => setShowDrawer(true)}
          tooltip="目录"
        />
        <Drawer
          title="目录"
          placement="right"
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          width={280}
        >
          <TocContent />
        </Drawer>
      </div>
    </>
  );
};
