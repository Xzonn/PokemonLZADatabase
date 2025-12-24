import "@/assets/css/styles.css";
import "@fontsource/nunito";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, ThemeConfig } from "antd";
import zhCN from "antd/locale/zh_CN";
import type { Metadata } from "next";
import React from "react";

import { Footer, Header, Notice, Sidebar, TocObserver } from "@/components";
import { BREAKPOINTS, DEFAULT_TITLE } from "@/utils";

const { xs, sm, md, lg, xl, xxl } = BREAKPOINTS;

const theme: ThemeConfig = {
  token: {
    screenXS: xs,
    screenXSMin: xs,
    screenXSMax: sm - 1,
    screenSM: sm,
    screenSMMin: sm,
    screenSMMax: md - 1,
    screenMD: md,
    screenMDMin: md,
    screenMDMax: lg - 1,
    screenLG: lg,
    screenLGMin: lg,
    screenLGMax: xl - 1,
    screenXL: xl,
    screenXLMin: xl,
    screenXLMax: xxl - 1,
    screenXXL: xxl,
    screenXXLMin: xxl,
  },
};

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: "宝可梦传说 Z-A 数据库",
  keywords: "宝可梦,宝可梦传说 Z-A,数据库,密阿雷市,招式,宝可梦图鉴,攻略",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="referrer" content="same-origin" />
        <script
          src="https://hm.baidu.com/hm.js?ceab13caa8bd6a5ff2d8b62c2d462283"
          referrerPolicy="no-referrer-when-downgrade"
          async
        />
      </head>
      <body>
        <AntdRegistry>
          <ConfigProvider locale={zhCN} theme={theme}>
            <TocObserver>
              <ClientLayout>{children}</ClientLayout>
            </TocObserver>
            <Footer />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

function ClientLayout({ children }: { children: React.ReactNode }) {
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
