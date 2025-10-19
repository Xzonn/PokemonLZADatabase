import { Pokemon } from "../../types";

const PokemonIcon: React.FC<{ pokemon: Pokemon; size?: number; shiny?: boolean; className?: string }> = ({
  pokemon,
  size = 64,
  shiny = false,
  className = "",
}) => {
  const { x, y } = pokemon;

  return (
    <div
      className={`icon-pokemon ${shiny ? "icon-pokemon-shiny" : ""} ${className || ""}`}
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
