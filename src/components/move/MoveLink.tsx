import { Popover } from "antd";

import { Move } from "@/types";
import { Link, TypeIcon } from "@/utils";
import { renderCategory } from "@/utils";

export const MoveLink: React.FC<{ move: Move; plus?: boolean }> = ({ move, plus = false }) => (
  <Popover
    className="flex-1 md:basis-1/2"
    placement="topLeft"
    title={
      <div className="flex flex-row items-center gap-2">
        <div>
          {move.name}
          {plus ? "（可加强）" : ""}
        </div>
        <TypeIcon type={move.type} />
        {renderCategory(move.category)}
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
      {plus ? <sup className="font-bold">+</sup> : ""}
    </Link>
  </Popover>
);
