import Link from "../components/Link";
import { EPokemonType, PokemonType } from "../types";

export const renderType = (type: PokemonType, link = true) =>
  link ? (
    <Link
      to={`/t/${type}`}
      className={`badge-type bg-${type}`}
    >
      {type}
    </Link>
  ) : (
    <span className={`badge-type bg-${type}`}>{type}</span>
  );
export const renderTypes = (types: [PokemonType, PokemonType], link = true) => (
  <span className="badges">{(types[0] === types[1] ? [types[0]] : types).map((type) => renderType(type, link))}</span>
);

type EffectTable = Partial<Record<PokemonType, Partial<Record<PokemonType, number>>>>;

const effectTable: EffectTable = {
  一般: {
    岩石: 0.5,
    幽灵: 0,
    钢: 0.5,
  },
  格斗: {
    一般: 2,
    飞行: 0.5,
    毒: 0.5,
    岩石: 2,
    虫: 0.5,
    幽灵: 0,
    钢: 2,
    超能力: 0.5,
    冰: 2,
    恶: 2,
    妖精: 0.5,
  },
  飞行: {
    格斗: 2,
    岩石: 0.5,
    虫: 2,
    钢: 0.5,
    草: 2,
    电: 0.5,
  },
  毒: {
    毒: 0.5,
    地面: 0.5,
    岩石: 0.5,
    幽灵: 0.5,
    钢: 0,
    草: 2,
    妖精: 2,
  },
  地面: {
    飞行: 0,
    毒: 2,
    岩石: 2,
    虫: 0.5,
    钢: 2,
    火: 2,
    草: 0.5,
    电: 2,
  },
  岩石: {
    格斗: 0.5,
    飞行: 2,
    地面: 0.5,
    虫: 2,
    钢: 0.5,
    火: 2,
    冰: 2,
  },
  虫: {
    格斗: 0.5,
    飞行: 0.5,
    毒: 0.5,
    幽灵: 0.5,
    钢: 0.5,
    火: 0.5,
    草: 2,
    超能力: 2,
    恶: 2,
    妖精: 0.5,
  },
  幽灵: {
    一般: 0,
    幽灵: 2,
    超能力: 2,
    恶: 0.5,
  },
  钢: {
    岩石: 2,
    钢: 0.5,
    火: 0.5,
    水: 0.5,
    电: 0.5,
    冰: 2,
    妖精: 2,
  },
  火: {
    岩石: 0.5,
    虫: 2,
    钢: 2,
    火: 0.5,
    水: 0.5,
    草: 2,
    冰: 2,
    龙: 0.5,
  },
  水: {
    地面: 2,
    岩石: 2,
    火: 2,
    水: 0.5,
    草: 0.5,
    龙: 0.5,
  },
  草: {
    飞行: 0.5,
    毒: 0.5,
    地面: 2,
    岩石: 2,
    虫: 0.5,
    钢: 0.5,
    火: 0.5,
    水: 2,
    草: 0.5,
    龙: 0.5,
  },
  电: {
    飞行: 2,
    地面: 0,
    水: 2,
    草: 0.5,
    电: 0.5,
    龙: 0.5,
  },
  超能力: {
    格斗: 2,
    毒: 2,
    钢: 0.5,
    超能力: 0.5,
    恶: 0,
  },
  冰: {
    飞行: 2,
    地面: 2,
    钢: 0.5,
    火: 0.5,
    水: 0.5,
    草: 2,
    冰: 0.5,
    龙: 2,
  },
  龙: {
    钢: 0.5,
    龙: 2,
    妖精: 0,
  },
  恶: {
    格斗: 0.5,
    幽灵: 2,
    超能力: 2,
    恶: 0.5,
    妖精: 0.5,
  },
  妖精: {
    格斗: 2,
    毒: 0.5,
    钢: 0.5,
    火: 0.5,
    龙: 2,
    恶: 2,
  },
};

export const calculateEffects = (types: PokemonType[], isAttack = false): Record<PokemonType, number> => {
  const effects = Object.fromEntries(EPokemonType.map((type) => [type, 1])) as Record<PokemonType, number>;

  for (const inputType of types) {
    for (const targetType of EPokemonType) {
      const effect = isAttack
        ? (effectTable[inputType]?.[targetType] ?? 1)
        : (effectTable[targetType]?.[inputType] ?? 1);
      effects[targetType] *= effect;
    }
  }

  return effects;
};

export const getEffect = (attack: PokemonType, defense: PokemonType): number => {
  return effectTable[attack]?.[defense] ?? 1;
};
