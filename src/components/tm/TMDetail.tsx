import { useRequest } from "ahooks";
import { Descriptions, DescriptionsProps, Spin } from "antd";
import { Fragment } from "react";

import { TMCell } from "../item/ItemCell";

import { ItemDataByName } from "@/data";
import { TM } from "@/types";
import { DescriptionsCommonProps, getTMMethod, onUseRequestError } from "@/utils";

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
  const { data = null, loading } = useRequest(async () => (await import(`@/data/tm`)).TMDataByMove, {
    refreshDeps: [move],
    onError: onUseRequestError,
  });

  return (
    <Fragment key="tm">
      <Spin spinning={loading}>
        <Descriptions
          {...DescriptionsCommonProps}
          items={getDescriptions(data?.[move])}
          className="description-2"
          column={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }}
        />
      </Spin>
    </Fragment>
  );
};
