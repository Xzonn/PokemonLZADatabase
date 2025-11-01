import { ConfigProvider, ThemeConfig } from "antd";
import zhCN from "antd/locale/zh_CN";
import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/styles.css";
import App from "./App";
import { BREAKPOINTS } from "./utils";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

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

root.render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={theme}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
