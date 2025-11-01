import cn from "classnames";

import { Link } from "./Link";

import { MoveCategory, PokemonType } from "@/types";

interface IIconProps {
  name: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

export const Icon: React.FC<IIconProps> = ({ name, style, className }) => (
  <span
    className={cn("icon", `icon-${name}`, className)}
    style={style}
  />
);

export const TypeIcon: React.FC<{ type: PokemonType; link?: boolean }> = ({ type, link = true }) =>
  link ? (
    <Link
      to={`/t/${type}`}
      className={`badge bg-${type}`}
    >
      <span className={`badge-icon icon icon-${type}-white`} />
      <span className="badge-text">{type}</span>
    </Link>
  ) : (
    <span className={`badge bg-${type}`}>
      <span className={`badge-icon icon icon-${type}-white`} />
      <span className="badge-text">{type}</span>
    </span>
  );

export const TypeIcons: React.FC<{ types: [PokemonType, PokemonType]; link?: boolean }> = ({ types, link = true }) => (
  <span className="badges">
    {(types[0] === types[1] ? [types[0]] : types).map((type) => (
      <TypeIcon
        key={type}
        type={type}
        link={link}
      />
    ))}
  </span>
);

export const CategoryIcon: React.FC<{ category: MoveCategory }> = ({ category }) => (
  <span className={`badge bg-${category}`}>
    <span className={`badge-icon icon icon-${category}-white`} />
    <span className="badge-text">{category}</span>
  </span>
);
