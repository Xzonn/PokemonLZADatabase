import { Descriptions, DescriptionsProps, Spin } from "antd";
import { FC, Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ItemList, SideMissionMap } from "@/components";
import { SideMissionFull, SideMissionInformation } from "@/types";
import { DEFAULT_TITLE, DescriptionsCommonProps2, useImport } from "@/utils";

import NotFoundPage from "./NotFoundPage";

const getDescriptions = (data?: SideMissionInformation | null): DescriptionsProps["items"] => [
  {
    key: "index",
    label: "编号",
    children: (data?.index || 0) < 0 ? `EX${-data!.index}` : data?.index.toString().padStart(3, "0"),
  },
  {
    key: "requester",
    label: "委托人",
    children: data?.requester || "—",
  },
  {
    key: "prize",
    label: "奖金",
    children: `$${data?.prize.toLocaleString("zh-CN") || "—"}`,
  },
  {
    key: "items",
    label: "道具",
    children: data?.items ? <ItemList items={data.items} /> : "—",
  },
  {
    key: "location",
    label: "领取地点",
    children: data?.location || "—",
  },
  {
    key: "unlockCondition",
    label: "解锁条件",
    children: data?.unlockCondition === null ? "自动解锁" : data?.unlockCondition || "—",
  },
  {
    key: "process",
    label: "任务概要",
    children: <ul>{data?.process.map((step) => <li key={step}>{step}</li>) || "—"}</ul>,
    span: 2,
  },
];

interface IProps {
  mission: string;
}

const SideMissionDetailPageCore: FC<IProps> = ({ mission }) => {
  useEffect(() => {
    document.title = `副任务 ${mission} - ${DEFAULT_TITLE}`;
  }, [mission]);

  const [data, loading] = useImport(() => import(`@/data/mission/side/${mission}.tsx`) as Promise<SideMissionFull>);

  const { information = null, default: Content } = data || {};

  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    setActive(information?.index || null);
  }, [information]);

  return (
    <Fragment key="side-mission-detail">
      <div className="section">
        <Spin spinning={loading}>
          <h1>
            副任务 {mission}：{information?.name || "—"}
          </h1>
          <div className="description">{information?.summary || "—"}</div>
        </Spin>
      </div>

      <div className="section">
        <h3>基本信息</h3>
        <Spin spinning={loading}>
          <Descriptions
            {...DescriptionsCommonProps2}
            items={getDescriptions(information)}
          />
        </Spin>
      </div>

      <div className="section">
        <h2>地点</h2>
        <SideMissionMap
          active={active}
          setActive={setActive}
        />
      </div>

      {Content ? <Content /> : null}
    </Fragment>
  );
};

const SideMissionDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const missionId = parseInt(id || "", 10);

  return id?.match(/EX[12]/) || (missionId >= 1 && missionId <= 119 && id?.length === 3) ? (
    <SideMissionDetailPageCore mission={id} />
  ) : (
    <NotFoundPage />
  );
};

export default SideMissionDetailPage;
