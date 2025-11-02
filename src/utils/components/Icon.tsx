import cn from "classnames";

import { Link } from "./Link";

import { MoveCategory, PokemonType } from "@/types";

interface IIconProps {
  name: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

export const Icon: React.FC<IIconProps> = ({ name, size, style, className }) => (
  <span
    className={cn("icon", `icon-${name}`, className)}
    style={{ fontSize: size, ...style }}
  />
);

export const TypeIcon: React.FC<{ type: PokemonType; link?: boolean }> = ({ type, link = true }) =>
  link ? (
    <Link
      to={`/t/${type}`}
      className={`badge bg-${type}`}
    >
      <div className={`badge-icon icon icon-${type}-white`} />
      <div className="badge-text">{type}</div>
    </Link>
  ) : (
    <div className={`badge bg-${type}`}>
      <div className={`badge-icon icon icon-${type}-white`} />
      <div className="badge-text">{type}</div>
    </div>
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
  <div className={`badge bg-${category}`}>
    <div className={`badge-icon icon icon-${category}-white`} />
    <div className="badge-text">{category}</div>
  </div>
);
