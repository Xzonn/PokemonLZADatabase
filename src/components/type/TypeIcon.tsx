import { Link } from "@/components/Link";
import { PokemonType } from "@/types";

export const TypeIcon: React.FC<{ type: PokemonType; link?: boolean }> = ({ type, link = true }) =>
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
