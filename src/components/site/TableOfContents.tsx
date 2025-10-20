import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    // 扫描页面中的标题元素
    const headings = document.querySelectorAll("h1, h2, h3, h4");
    const items: TocItem[] = [];

    headings.forEach((heading) => {
      if (heading.id) {
        items.push({
          id: heading.id,
          title: heading.textContent || "",
          level: parseInt(heading.tagName.substring(1)),
        });
      }
    });

    setTocItems(items);

    // 监听滚动以高亮当前标题
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      },
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <>
      {/* 移动端切换按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Toggle table of contents"
      >
        {isOpen ? <CloseOutlined className="text-xl" /> : <MenuOutlined className="text-xl" />}
      </button>

      {/* 遮罩层 - 移动端 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 目录侧边栏 */}
      <aside
        className={`
          fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg z-40
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0 lg:sticky lg:top-20
        `}
      >
        <nav className="p-4">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">目录</h3>
          <ul className="space-y-2">
            {tocItems.map((item) => (
              <li
                key={item.id}
                style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
              >
                <button
                  onClick={() => scrollToHeading(item.id)}
                  className={`
                    text-left w-full px-3 py-2 rounded-lg text-sm transition-colors
                    ${activeId === item.id ? "bg-primary text-white font-semibold" : "text-gray-700 hover:bg-gray-100"}
                  `}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default TableOfContents;
