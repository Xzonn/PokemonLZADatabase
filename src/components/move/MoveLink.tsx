import { Popover } from "antd";

import { Move } from "@/types";
import { CategoryIcon, Icon, Link, TypeIcon } from "@/utils";

export const MoveLink: React.FC<{ move: Move; plus?: boolean }> = ({ move, plus = false }) => (
  <Popover
    className="flex-1 md:basis-1/2"
    placement="topLeft"
    title={
      <div className="flex flex-row items-center gap-2">
        <div>{move.name}</div>
        {plus ? (
          <Icon
            name="plus-black"
            className="scale-[1.5]"
          />
        ) : null}
        <TypeIcon type={move.type} />
        <CategoryIcon category={move.category} />
      </div>
    }
    content={
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <div className="basis-1/2">威力：{move.category === "变化" ? "—" : move.power || "—"}</div>
          <div className="basis-1/2">等待时间：{move.wait}</div>
        </div>
        <div className="max-w-sm">{move.description}</div>
      </div>
    }
  >
    <Link to={`/m/${move.name}`}>
      {move.name}
      {plus ? <Icon name="plus" /> : ""}
    </Link>
  </Popover>
);
