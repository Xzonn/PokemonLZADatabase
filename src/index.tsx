import { ConfigProvider, ThemeConfig } from "antd";
import zhCN from "antd/locale/zh_CN";
import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/styles.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const theme: ThemeConfig = {
  token: {
    screenXS: 480,
    screenXSMin: 480,
    screenXSMax: 639,
    screenSM: 640,
    screenSMMin: 640,
    screenSMMax: 767,
    screenMD: 768,
    screenMDMin: 768,
    screenMDMax: 1023,
    screenLG: 1024,
    screenLGMin: 1024,
    screenLGMax: 1279,
    screenXL: 1280,
    screenXLMin: 1280,
    screenXLMax: 1535,
    screenXXL: 1536,
    screenXXLMin: 1536,
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
