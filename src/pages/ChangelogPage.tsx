import { Spin, Timeline } from "antd";
import React, { Fragment, useEffect } from "react";

import { DEFAULT_TITLE, useImport } from "@/utils";

const ChangelogPage: React.FC = () => {
  useEffect(() => {
    document.title = `更新日志 - ${DEFAULT_TITLE}`;
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
        <h1>更新日志</h1>
      </div>

      <div className="section">
        <Spin spinning={loading}>
          {changelogs.map((log) => (
            <>
              <h3>{log.date}</h3>
              <Timeline
                className="mt-8"
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

export default ChangelogPage;
