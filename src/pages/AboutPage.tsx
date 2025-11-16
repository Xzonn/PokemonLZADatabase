import { Spin, Timeline } from "antd";
import React, { Fragment, useEffect } from "react";

import { DEFAULT_TITLE, useImport, useLoadingAnchor } from "@/utils";

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

  useLoadingAnchor([loading]);

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
        <h2>隐私声明</h2>
        <p>本站重视用户隐私保护，特此声明如下：</p>
        <h3>信息收集</h3>
        <p>
          本站使用百度统计、腾讯云 Aegis
          等第三方分析服务来收集访问数据，包括但不限于页面访问量、访问时长、来源渠道等信息。这些数据仅用于改进网站服务质量，不涉及个人隐私信息的收集。
        </p>
        <h3>Cookie 使用</h3>
        <p>
          本站使用 Cookie
          和本地存储（LocalStorage）来保存用户的浏览设置，如已查看的内容标记等。这些数据仅存储在您的浏览器中，不会上传到服务器。您可以随时通过浏览器设置清除这些数据。
        </p>
        <h3>第三方服务</h3>
        <p>
          本站集成了 Giscus 评论系统（基于 GitHub Discussions），使用该功能需要登录您的 GitHub 账号。评论内容将存储在
          GitHub 平台，受 GitHub 隐私政策约束。
        </p>
        <p>
          本站通过腾讯云和 Vercel 提供服务。访问本站时，您的 IP
          地址等信息可能会被服务提供商记录，具体请参考相关服务商的隐私政策。
        </p>
        <h3>数据安全</h3>
        <p>本站不会主动收集、存储或出售用户的个人信息。本站采用 HTTPS 加密传输，确保数据传输安全。</p>
        <h3>政策变更</h3>
        <p>本隐私声明可能会根据法律法规要求或网站运营需要进行更新。</p>
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
