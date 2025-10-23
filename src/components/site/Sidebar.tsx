import React from "react";

import { Navigation } from "./Navigation";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 px-4 py-8 z-40 hidden md:block">
      <nav className="p-4 bg-white rounded-2xl shadow-xl">
        <Navigation />
      </nav>
    </aside>
  );
};
