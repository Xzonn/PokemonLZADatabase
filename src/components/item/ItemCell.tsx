import React from "react";

import { Link } from "../Link";
import { ItemIconWithoutTooltip } from "./ItemIcon";

import { Item } from "@/types";

export const ItemCell: React.FC<{ item?: Item }> = ({ item }) =>
  item ? (
    <div className="cell-item">
      <ItemIconWithoutTooltip item={item} />
      <div className="item-name">
        {item.move ? (
          <>
            {item.name}（<Link to={`/m/${item.move}`}>{item.move}</Link>）
          </>
        ) : (
          <>{item.name}</>
          // <Link to={`/i/${item.name}`}>{item.name}</Link>
        )}
      </div>
    </div>
  ) : null;

export const TMCell: React.FC<{ item?: Item }> = ({ item }) =>
  item ? (
    <div className="cell-item">
      <ItemIconWithoutTooltip item={item} />
      <div className="item-name">{item.name}</div>
    </div>
  ) : null;
