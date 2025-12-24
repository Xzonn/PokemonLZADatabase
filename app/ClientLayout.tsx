"use client";

import React from "react";

import { Header, Notice, Sidebar } from "@/components";
import { BREAKPOINTS } from "@/utils";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarShown, setSidebarShown] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setSidebarShown(window.innerWidth >= BREAKPOINTS.md);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header showDrawer={!sidebarShown} />
      <Notice />
      <div className="md:flex relative flex-1">
        {sidebarShown ? <Sidebar /> : null}
        <main>{children}</main>
      </div>
    </>
  );
}
