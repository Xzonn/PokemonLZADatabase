import { FC } from "react";

import { ItemDataByName } from "@/data";

import { ItemCell } from "./ItemCell";

interface IProps {
  items: {
    item: string;
    number: number;
  }[];
}

export const ItemList: FC<IProps> = ({ items }) => (
  <div className="space-y-2">
    {items.length
      ? items.map((item, index) => (
          <div
            key={index}
            className="icon-wrapper"
          >
            <ItemCell item={ItemDataByName[item.item]} />
            <div>×{item.number}</div>
          </div>
        ))
      : "—"}
  </div>
);
