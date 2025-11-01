export const EItemPocket = ["回复", "精灵球", "道具", "宝物", "重要物品", "树果", "招式学习器", "超级石"];

export type ItemPocket = (typeof EItemPocket)[number];

export interface Item {
  id: number;
  name: string;
  x: number;
  y: number;
  move: string | null;
  page: string | null;
}

export interface ItemDetail {
  id: number;
  name: string;
  japanese: string;
  english: string;
  description: string;
  price: number;
  priceMegaShard: number;
  priceColorfulScrew: number;
  pocket: number;
  sortIndex: number;
}

export interface ItemFull extends Item, ItemDetail {}
