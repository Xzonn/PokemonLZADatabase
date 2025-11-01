import React from "react";

import { Navigation } from "./Navigation";

export const Sidebar: React.FC = () => (
  <aside>
    <nav>
      <Navigation />
    </nav>
    {/* <nav className="toc">
      <span>这里放目录</span>
    </nav> */}
  </aside>
);
