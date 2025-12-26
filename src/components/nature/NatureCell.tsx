import { Tooltip } from "antd";
import { FC } from "react";

import { NatureDataByName } from "@/data";
import { Nature } from "@/types";
import { Link } from "@/utils";

interface IProps {
  nature: Nature;
}
export const NatureCell: FC<IProps> = ({ nature }) => (
  <Tooltip
    title={
      NatureDataByName[nature]["+"]
        ? `＋${NatureDataByName[nature]["+"]}\u3000－${NatureDataByName[nature]["-"]}`
        : "不影响能力"
    }
  >
    <>
      <Link
        to="/性格一览"
        className="whitespace-nowrap"
      >
        {nature}
      </Link>
    </>
  </Tooltip>
);
