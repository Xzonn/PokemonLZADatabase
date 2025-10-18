import { Pokemon } from "../types";

const PokemonIcon: React.FC<{ className?: string; pokemon: Pokemon; size?: number }> = ({
  className,
  pokemon,
  size = 64,
}) => {
  const { x, y } = pokemon;

  return (
    <div
      className={`icon-pokemon ${className}`}
      style={{
        width: size,
        height: size,
        backgroundSize: `${size * 20}px auto`,
        backgroundPosition: `-${x * size}px -${y * size}px`,
      }}
    ></div>
  );
};

export default PokemonIcon;
