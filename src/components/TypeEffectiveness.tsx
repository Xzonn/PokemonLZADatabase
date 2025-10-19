import { Descriptions, DescriptionsProps } from "antd";
import { EPokemonType, PokemonType } from "../types";
import { calculateEffects } from "../utils/typeEffectiveness";
import { DescriptionsCommonProps, renderType } from "../utils";

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

const TypeEffectiveness: React.FC<{ types: PokemonType[] }> = ({ types }) => {
  const effectiveness = calculateEffects(types);
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

export default TypeEffectiveness;
