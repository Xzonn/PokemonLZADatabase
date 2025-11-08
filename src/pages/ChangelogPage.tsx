import { Timeline } from "antd";
import React, { Fragment, useEffect, useMemo } from "react";

import { DEFAULT_TITLE } from "@/utils";

interface ChangelogEntry {
  date: string;
  changes: string[];
}

const CHANGELOG_DATA: ChangelogEntry[] = [
  {
    date: "2025-11-08",
    changes: ["修复网站打包配置问题"],
  },
  {
    date: "2025-10-30",
    changes: ["新增副任务一览页面，可以查看游戏中的所有副任务信息"],
  },
  {
    date: "2025-10-29",
    changes: ["新增密阿雷市地图功能，可以在地图上查看各个区域", "优化打包配置，提升网站加载速度", "更新版本信息"],
  },
  {
    date: "2025-10-26",
    changes: ["优化搜索引擎收录配置"],
  },
  {
    date: "2025-10-24",
    changes: [
      "新增茉蜜姬调查页面，可以查看茉蜜姬调查相关内容",
      "新增招式学习器一览页面，包含完整的招式学习器数据",
      "优化招式列表页面显示效果",
      "优化招式学习器页面显示效果",
      "更新道具数据",
      "更新ＺＡ登峰战相关数据",
      "优化页面整体布局",
    ],
  },
  {
    date: "2025-10-23",
    changes: ["优化页面显示效果"],
  },
  {
    date: "2025-10-22",
    changes: ["新增评论功能，可以在页面下方进行讨论交流", "更新道具图标，使用更清晰的图标", "改进数据导入导出功能"],
  },
  {
    date: "2025-10-21",
    changes: [
      "新增训练家数据，可以查看游戏中所有训练家的信息",
      "优化ＺＡ登峰战页面，拆分为独立页面并优化显示",
      "优化训练家列表页面布局",
      "新增招式强化相关信息",
      "新增宝可元符号显示",
      "优化网站地图配置",
      "新增开源许可证信息",
      "优化类型相关数据导出",
    ],
  },
  {
    date: "2025-10-20",
    changes: ["新增侧边栏导航功能，方便快速访问各个页面", "优化网站地图", "优化开发环境配置"],
  },
  {
    date: "2025-10-19",
    changes: [
      "网站正式上线！",
      "升级到 Vite 构建工具，提升开发和构建速度",
      "创建网站地图，方便搜索引擎收录",
      "新增宝可梦进化信息",
      "修复属性相克计算错误",
      "修复表格显示问题",
      "修复分页功能问题",
      "修复页面标题显示",
      "修复链接跳转问题",
      "优化代码配置",
      "更新网站内容",
    ],
  },
];

const ChangelogPage: React.FC = () => {
  useEffect(() => {
    document.title = `更新日志 - ${DEFAULT_TITLE}`;
  }, []);

  const sortedDates = useMemo(() => CHANGELOG_DATA.map((entry) => entry.date).sort((a, b) => b.localeCompare(a)), []);

  return (
    <Fragment key="changelog">
      <div className="section">
        <h1>更新日志</h1>
        <div className="description">本页面记录了本站的更新历史，时区为 UTC+8。</div>
      </div>

      <div className="section">
        {sortedDates.map((date) => {
          const entry = CHANGELOG_DATA.find((e) => e.date === date);
          if (!entry) return null;

          return (
            <div
              key={date}
              className="mb-8"
            >
              <h2 className="text-xl font-bold mb-4">{date}</h2>
              <Timeline
                items={entry.changes.map((change) => ({
                  children: <div>{change}</div>,
                }))}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ChangelogPage;
