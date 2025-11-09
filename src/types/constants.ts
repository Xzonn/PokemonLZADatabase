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

export const ENature = [
  "勤奋",
  "怕寂寞",
  "勇敢",
  "固执",
  "顽皮",
  "大胆",
  "坦率",
  "悠闲",
  "淘气",
  "乐天",
  "胆小",
  "急躁",
  "认真",
  "爽朗",
  "天真",
  "内敛",
  "慢吞吞",
  "冷静",
  "害羞",
  "马虎",
  "温和",
  "温顺",
  "自大",
  "慎重",
  "浮躁",
] as const;

export type Nature = (typeof ENature)[number];

export const EStat = ["HP", "攻击", "防御", "速度", "特攻", "特防"] as const;

export type Stat = (typeof EStat)[number];
