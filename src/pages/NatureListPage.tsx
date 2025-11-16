import { Table } from "antd";
import { FC, Fragment, useEffect, useMemo } from "react";

import { ItemTable, LumioseMap, NatureCell, SideMissionTable } from "@/components";
import { NatureData } from "@/data";
import { ItemFullData } from "@/data/i/detail";
import { EStat, Nature } from "@/types";
import { DEFAULT_TITLE, TableCommonProps, useImport, useLoadingAnchor } from "@/utils";

const NatureListPage: FC = () => {
  useEffect(() => {
    document.title = `性格一览 - ${DEFAULT_TITLE}`;
  }, []);

  const natureData = useMemo(
    () =>
      Object.values(Object.groupBy(NatureData, (_, i) => Math.floor(i % 5))).map((group) =>
        Object.fromEntries(group?.map((item, index) => [EStat[index + 1], item.name]) || []),
      ),
    [],
  );

  const mints = useMemo(() => ItemFullData.filter((item) => item.name.endsWith("薄荷")), []);

  const [sideMissionData, sideMissionLoading] = useImport(async () =>
    (await import("@/data/mission/side")).SideMissionData.filter((mission) =>
      mission.items.some((it) => it.item.endsWith("薄荷")),
    ),
  );

  useLoadingAnchor([sideMissionLoading]);

  return (
    <Fragment key="research-list">
      <div className="section">
        <h1>性格一览</h1>
      </div>

      <div className="section">
        <h2>对能力的影响</h2>
        <p>
          游戏中共有 25 种性格，其中 20
          种性格会影响宝可梦的能力，每种性格对应一个提升的能力（+10%）和一个降低的能力（-10%）。
        </p>
        <p>列表中提高的能力与降低的能力相同时，表明该性格对该能力没有影响。</p>
        <Table
          {...TableCommonProps}
          columns={[
            {
              title: "",
              key: "title",
              render: (_, __, index) => `－${EStat[index + 1]}`,
              rowScope: "row",
            },
            ...EStat.slice(1).map((stat) => ({
              title: `＋${stat}`,
              dataIndex: stat,
              render: (nature: Nature) => <NatureCell nature={nature} />,
            })),
          ]}
          dataSource={natureData}
          pagination={false}
        />
      </div>

      <div className="section">
        <h2>薄荷一览</h2>
        <p>薄荷能够改变性格对于宝可梦能力的影响，但不改变性格本身。</p>
        <ItemTable
          extraColumns={[
            {
              title: "买入价格",
              key: "price",
              render: () => "$20000",
            },
          ]}
          headers={["编号", "道具", "买入价格", "卖出价格", "说明"]}
          data={mints}
        />
      </div>

      <div className="section">
        <h2>薄荷摊一览</h2>
        <LumioseMap filter={{ layers: new Set(["mint"]) }} />
        <p>
          每个薄荷摊会售卖 5 种薄荷，包含能够提升同种能力的 4 种薄荷，以及认真薄荷。图标上标注了薄荷能够提升的能力。
        </p>
      </div>

      <div className="section">
        <h2>能够获取薄荷的副任务</h2>
        <SideMissionTable
          loading={sideMissionLoading}
          data={sideMissionData || []}
        />
      </div>
    </Fragment>
  );
};

export default NatureListPage;
