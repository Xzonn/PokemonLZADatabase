export type PokemonForm = `${number}-${number}`;

export const EPokemonType = [
  "一般",
  "格斗",
  "飞行",
  "毒",
  "地面",
  "岩石",
  "虫",
  "幽灵",
  "钢",
  "火",
  "水",
  "草",
  "电",
  "超能力",
  "冰",
  "龙",
  "恶",
  "妖精",
] as const;

export type PokemonType = (typeof EPokemonType)[number];

export const EMoveCategory = ["物理", "特殊", "变化"] as const;

export type MoveCategory = (typeof EMoveCategory)[number];

export type Position = {
  category?: string;
  index: number;
  x: number;
  y: number;
};
