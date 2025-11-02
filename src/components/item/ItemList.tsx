import { FC } from "react";

import { ItemCell } from "./ItemCell";

import { ItemDataByName } from "@/data";

interface IProps {
  items: {
    item: string;
    number: number;
  }[];
}

export const ItemList: FC<IProps> = ({ items }) => (
  <div className="space-y-2">
    {items.map((item, index) => (
      <div
        key={index}
        className="icon-wrapper"
      >
        <ItemCell item={ItemDataByName[item.item]} />
        <div>×{item.number}</div>
      </div>
    )) || "—"}
  </div>
);
