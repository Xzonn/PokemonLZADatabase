import { Tooltip } from "antd";
import cn from "classnames";

import { Link } from "../Link";

import { ItemDataByName } from "@/data";
import { Item } from "@/types";

export interface IItemIconProps {
  item?: Item;
  size?: number;
  className?: string;
  link?: boolean;
}

export const ItemIconWithoutTooltip: React.FC<IItemIconProps> = ({ item, size = 22, className = "", link = false }) => {
  const realItem = item ?? ItemDataByName["无"];
  const { x, y } = realItem;

  const style: React.CSSProperties = {
    width: size,
    height: size,
    backgroundSize: `${size * 20}px auto`,
    backgroundPosition: `-${x * size}px -${y * size}px`,
  };
  const combinedClassName = cn("icon-item", className || "");
  const name = realItem.name === "无" ? "" : realItem.name;

  return link && name ? (
    <Link
      to={`/i/${realItem.name}`}
      className={combinedClassName}
      style={style}
    />
  ) : (
    <div
      className={combinedClassName}
      style={style}
    />
  );
};

export const ItemIcon: React.FC<IItemIconProps> = (props) => {
  const { item } = props;
  const name = item?.name === "无" ? "" : item?.name;

  return name ? (
    <Tooltip title={name}>
      <>
        <ItemIconWithoutTooltip {...props} />
      </>
    </Tooltip>
  ) : (
    <ItemIconWithoutTooltip {...props} />
  );
};
