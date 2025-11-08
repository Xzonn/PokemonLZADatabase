import { Spin, Timeline } from "antd";
import React, { Fragment, useEffect } from "react";

import { DEFAULT_TITLE, useImport } from "@/utils";

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = `关于网站 - ${DEFAULT_TITLE}`;
  }, []);

  const [data, loading] = useImport(async () => (await import("@/data/changelog.txt?raw")).default);
  const changelogs = data
    ? Array.from(data.matchAll(/^## (\d\d\d\d-\d\d-\d\d)\n+((?:- .+\n)+)/gm)).map((match) => ({
        date: match[1],
        entries: match[2]
          .split("\n")
          .filter(Boolean)
          .map((line) => line.replace(/^- /, "")),
      }))
    : [];

  return (
    <Fragment key="changelog">
      <div className="section">
        <h1>关于网站</h1>
      </div>

      <div className="section">
        <h2>网站说明</h2>
        <p>
          《宝可梦传说 Z-A》数据库（下称“本站”）由 Xzonn 制作并维护，旨在为玩家提供全面的宝可梦资料和便捷的查询功能。
        </p>
        <p>
          本站内容主要来源于游戏数据挖掘和社区贡献，力求准确和及时更新。但由于信息量庞大，难免存在疏漏和错误，欢迎各位玩家通过各种渠道反馈问题和建议。
        </p>
        <p>
          除非另有声明，本站内容采用
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享</a>
          授权。转载请注明出处并链接回本站。
        </p>
        <p>
          本站采用 React 18 + TypeScript + Vite 构建，使用 Ant Design 5 作为 UI 组件库，样式采用 Tailwind CSS 4
          进行处理，英文字体使用 Nunito，部署方式为腾讯云（中国大陆）/ Vercel（其他区域）。网站源代码可在{" "}
          <a href="https://github.com/Xzonn/PokemonLZADatabase">https://github.com/Xzonn/PokemonLZADatabase</a> 获取。
        </p>
      </div>

      <div className="section">
        <h2>更新日志</h2>
        <Spin spinning={loading}>
          {changelogs.map((log) => (
            <>
              <h3>{log.date}</h3>
              <Timeline
                mode="left"
                items={log.entries.map((entry) => ({
                  children: entry,
                }))}
              />
            </>
          ))}
        </Spin>
      </div>
    </Fragment>
  );
};

export default AboutPage;
