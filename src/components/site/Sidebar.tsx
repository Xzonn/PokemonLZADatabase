import cn from "classnames";
import React, { useContext } from "react";

import { Navigation } from "./Navigation";
import { TableOfContents } from "./TableOfContents";
import { TocContext } from "./TocObserver";

export const Sidebar: React.FC = () => {
  const { tocItems } = useContext(TocContext)!;

  return (
    <aside>
      <nav className="nav-site">
        <div className="nav-title">站内导航</div>
        <Navigation />
      </nav>
      <nav className={cn("nav-toc", tocItems.length > 0 ? "" : "hidden")}>
        <div className="nav-title">目录</div>
        <TableOfContents />
      </nav>
    </aside>
  );
};
