import React from "react";

import { Navigation } from "./Navigation";

export const Sidebar: React.FC = () => (
  <nav className="sticky top-8 w-64 px-4 py-8 mb-4">
    <div className="p-4 bg-white rounded-2xl shadow-xl">
      <Navigation />
    </div>
  </nav>
);
