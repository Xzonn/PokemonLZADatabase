import { Descriptions, DescriptionsProps, Spin } from "antd";
import { Fragment } from "react";

import { ItemDataByName } from "@/data";
import { TM } from "@/types";
import { DescriptionsCommonProps2, getTMMethod, useImport } from "@/utils";

import { TMCell } from "../item/ItemCell";

const getDescriptions = (tm?: TM): DescriptionsProps["items"] => [
  {
    key: "index",
    label: "编号",
    children: tm ? <TMCell item={ItemDataByName[tm.tmName]} /> : "—",
  },
  {
    key: "method",
    label: "获取方式",
    children: tm ? getTMMethod(tm) : "—",
  },
];

export const TMDetail: React.FC<{ move: string }> = ({ move }) => {
  const [data, loading] = useImport(async () => (await import("@/data/tm")).TMDataByMove);

  return (
    <Fragment key="tm">
      <Spin spinning={loading}>
        <Descriptions
          {...DescriptionsCommonProps2}
          items={getDescriptions(data?.[move])}
        />
      </Spin>
    </Fragment>
  );
};
