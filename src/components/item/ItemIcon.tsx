import { Tooltip } from "antd";
import cn from "classnames";

import { Link } from "../Link";

import { Item } from "@/types";

export interface IItemIconProps {
  item: Item;
  size?: number;
  className?: string;
  link?: boolean;
}

export const ItemIcon: React.FC<IItemIconProps> = ({ item, size = 20, className = "", link = false }) => {
  const { x, y } = item;

  const style: React.CSSProperties = {
    width: size,
    height: size,
    backgroundSize: `${size * 20}px auto`,
    backgroundPosition: `-${x * size}px -${y * size}px`,
  };
  const combinedClassName = cn("icon-item", className || "");
  const name = item.name === "无" ? "" : item.name;

  return link && name ? (
    <Tooltip title={name}>
      <Link
        to={`/i/${item.name}`}
        className={combinedClassName}
        style={style}
      />
    </Tooltip>
  ) : (
    <Tooltip title={name}>
      <div
        className={combinedClassName}
        style={style}
      />
    </Tooltip>
  );
};
