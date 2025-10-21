import { Descriptions, DescriptionsProps } from "antd";

import { EPokemonType, PokemonType } from "../types";
import { DescriptionsCommonProps, calculateEffects, renderType } from "../utils";

const effectivenessMap: Record<number, string> = {
  0: "effect-0",
  0.25: "effect-quarter",
  0.5: "effect-half",
  1: "effect-normal",
  2: "effect-double",
  4: "effect-quadruple",
};

const renderEffectiveness = (effectiveness: number) => (
  <span className={effectivenessMap[effectiveness]}>{effectiveness}</span>
);

export const TypeEffectiveness: React.FC<{ types: PokemonType[]; isAttack?: boolean }> = ({
  types,
  isAttack = false,
}) => {
  const effectiveness = calculateEffects(types, isAttack);
  const items: DescriptionsProps["items"] = EPokemonType.map((type) => ({
    label: renderType(type),
    key: type,
    children: renderEffectiveness(effectiveness[type]),
  }));

  return (
    <Descriptions
      {...DescriptionsCommonProps}
      className="table-effect"
      items={items}
      column={{ xs: 3, sm: 3, md: 3, lg: 6, xl: 9, xxl: 9 }}
      layout="vertical"
    />
  );
};
