import { Timeline } from "antd";
import React, { Fragment, useEffect, useMemo } from "react";

import { DEFAULT_TITLE } from "@/utils";

interface Commit {
  hash: string;
  date: string;
  message: string;
  author: string;
}

type CommitsByDate = Record<string, Commit[]>;

const CHANGELOG_DATA: Commit[] = [
  { hash: "10bf34f", date: "2025-11-08", message: "fix: 修复打包", author: "Xzonn" },
  { hash: "3419bab", date: "2025-10-30", message: "feat: 添加副任务一览", author: "Xzonn" },
  { hash: "84a3fea", date: "2025-10-29", message: "feat: 更新打包设置", author: "Xzonn" },
  { hash: "30dd936", date: "2025-10-29", message: "fix: 匹配版本", author: "Xzonn" },
  { hash: "8564d65", date: "2025-10-29", message: "feat: 密阿雷地图初稿", author: "Xzonn" },
  { hash: "853c3c3", date: "2025-10-26", message: "feat: 添加 robots.txt", author: "Xzonn" },
  { hash: "e0617ad", date: "2025-10-24", message: "feat: 优化招式列表", author: "Xzonn" },
  { hash: "aef0cb0", date: "2025-10-24", message: "feat: 优化招式学习器", author: "Xzonn" },
  { hash: "444f074", date: "2025-10-24", message: "feat: 添加招式学习器数据", author: "Xzonn" },
  { hash: "ad01294", date: "2025-10-24", message: "feat: 更新道具", author: "Xzonn" },
  { hash: "bb3d773", date: "2025-10-24", message: "feat: 添加茉蜜姬调查", author: "Xzonn" },
  { hash: "47b96c1", date: "2025-10-24", message: "feat: 更新登峰战", author: "Xzonn" },
  { hash: "77dc801", date: "2025-10-24", message: "feat: 更新页面布局", author: "Xzonn" },
  { hash: "f653bdc", date: "2025-10-23", message: "feat: 优化显示", author: "Xzonn" },
  { hash: "022bf32", date: "2025-10-22", message: "feat: 添加 Giscus", author: "Xzonn" },
  { hash: "c83a086", date: "2025-10-22", message: "feat: 更新道具图标", author: "Xzonn" },
  { hash: "41fac4a", date: "2025-10-22", message: "feat: 改进导入导出", author: "Xzonn" },
  { hash: "f2189f0", date: "2025-10-21", message: "feat: 优化登峰战数据", author: "Xzonn" },
  { hash: "c0380b6", date: "2025-10-21", message: "feat: 添加宝可元的符号", author: "Xzonn" },
  { hash: "20caa9c", date: "2025-10-21", message: "feat: 添加 sitemap", author: "Xzonn" },
  { hash: "cca04c2", date: "2025-10-21", message: "feat: 添加 LICENSE", author: "Xzonn" },
  { hash: "ce1f6d4", date: "2025-10-21", message: "feat: 更新训练家列表布局", author: "Xzonn" },
  { hash: "7234e59", date: "2025-10-21", message: "feat: 招式强化", author: "Xzonn" },
  { hash: "0731d58", date: "2025-10-21", message: "feat: 拆分ＺＡ登峰战，优化训练家列表显示", author: "Xzonn" },
  { hash: "b231f6b", date: "2025-10-21", message: "feat: 添加训练家数据", author: "Xzonn" },
  { hash: "ff9037f", date: "2025-10-21", message: "feat: 拆分类型导出", author: "Xzonn" },
  { hash: "857c45c", date: "2025-10-20", message: "feat: 添加侧边栏", author: "Xzonn" },
  { hash: "64ae809", date: "2025-10-20", message: "feat: 添加 VS Code 配置", author: "Xzonn" },
  { hash: "52090f0", date: "2025-10-20", message: "fix: 修复 sitemap", author: "Xzonn" },
  { hash: "0ec72d7", date: "2025-10-19", message: "fix: 修复属性相克重复计算", author: "Xzonn" },
  { hash: "f2ece89", date: "2025-10-19", message: "fix: 修复表格 key 不唯一的问题", author: "Xzonn" },
  { hash: "e801077", date: "2025-10-19", message: "fix: 修复分页问题", author: "Xzonn" },
  { hash: "9e801fe", date: "2025-10-19", message: "refactor: 更新 eslint 配置", author: "Xzonn" },
  { hash: "7732dd2", date: "2025-10-19", message: "fix: 修复配置项", author: "Xzonn" },
  { hash: "90967f1", date: "2025-10-19", message: "fix: 修复 sitemap", author: "Xzonn" },
  { hash: "de0e5f0", date: "2025-10-19", message: "feat: 升级到 vite，创建 sitemap", author: "Xzonn" },
  { hash: "4861958", date: "2025-10-19", message: "fix: 修复链接问题", author: "Xzonn" },
  { hash: "d3ff371", date: "2025-10-19", message: "feat: 更新进化", author: "Xzonn" },
  { hash: "9296288", date: "2025-10-19", message: "feat: 更新", author: "Xzonn" },
  { hash: "a502744", date: "2025-10-19", message: "fix: 修复页面标题", author: "Xzonn" },
  { hash: "af90a01", date: "2025-10-19", message: "feat: 更新", author: "Xzonn" },
  { hash: "9bc8f6c", date: "2025-10-19", message: "feat: 更新", author: "Xzonn" },
  { hash: "a983b5f", date: "2025-10-19", message: "feat: Update", author: "Xzonn" },
  { hash: "5061887", date: "2025-10-19", message: "Initial version", author: "Xzonn" },
];

const ChangelogPage: React.FC = () => {
  useEffect(() => {
    document.title = `更新日志 - ${DEFAULT_TITLE}`;
  }, []);

  const commitsByDate = useMemo(() => {
    const grouped: CommitsByDate = {};
    CHANGELOG_DATA.forEach((commit) => {
      if (!grouped[commit.date]) {
        grouped[commit.date] = [];
      }
      grouped[commit.date].push(commit);
    });
    return grouped;
  }, []);

  const sortedDates = useMemo(() => Object.keys(commitsByDate).sort((a, b) => b.localeCompare(a)), [commitsByDate]);

  return (
    <Fragment key="changelog">
      <div className="section">
        <h1>更新日志</h1>
        <div className="description">本页面记录了本站的更新历史，时区为 UTC+8。</div>
      </div>

      <div className="section">
        {sortedDates.map((date) => (
          <div
            key={date}
            className="mb-8"
          >
            <h2 className="text-xl font-bold mb-4">{date}</h2>
            <Timeline
              items={commitsByDate[date].map((commit) => ({
                children: (
                  <div>
                    <span className="font-mono text-sm text-gray-500">{commit.hash}</span>
                    <span className="ml-2">{commit.message}</span>
                  </div>
                ),
              }))}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ChangelogPage;
