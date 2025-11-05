import { Pokemon, PokemonForm } from "@/types";

export const getPokemonFullName = (pokemon: Pokemon): string =>
  pokemon.form > 0 ? `${pokemon.name}-${pokemon.form}` : pokemon.name;

export const getPokemonFullNameFriendly = (pokemon: Pokemon): string =>
  pokemon.formName ? `${pokemon.name}（${pokemon.formName}）` : pokemon.name;

export const getPokemonFullId = (pokemon: Pokemon): PokemonForm =>
  `${pokemon.id.toString().padStart(3, "0") as unknown as number}-${pokemon.form}`;

export const filterPokemon = (pokemon: Pokemon): boolean => {
  if ((pokemon.id === 664 || pokemon.id === 665) && pokemon.form !== 6) {
    return false;
  }
  return true;
};

export const EvolutionItemMap = new Map([
  [1, 80], // Sun Stone
  [2, 81], // Moon Stone
  [3, 82], // Fire Stone
  [4, 83], // Thunder Stone
  [5, 84], // Water Stone
  [6, 85], // Leaf Stone
  [7, 107], // Shiny Stone
  [8, 108], // Dusk Stone
  [9, 110], // Oval Stone
  [10, 1779], // Griseous Core
  [15, 229], // Everstone
  [16, 236], // Light Ball
  [19, 280], // Destiny Knot
  [20, 289], // Power Bracer
  [21, 290], // Power Belt
  [22, 291], // Power Lens
  [23, 292], // Power Band
  [24, 293], // Power Anklet
  [25, 294], // Power Weight
  [26, 298], // Flame Plate
  [27, 299], // Splash Plate
  [28, 300], // Zap Plate
  [29, 301], // Meadow Plate
  [30, 302], // Icicle Plate
  [31, 303], // Fist Plate
  [32, 304], // Toxic Plate
  [33, 305], // Earth Plate
  [34, 306], // Sky Plate
  [35, 307], // Mind Plate
  [36, 308], // Insect Plate
  [37, 309], // Stone Plate
  [38, 310], // Spooky Plate
  [39, 311], // Draco Plate
  [40, 312], // Dread Plate
  [41, 313], // Iron Plate
  [49, 326], // Razor Claw
  [50, 327], // Razor Fang
  [51, 644], // Pixie Plate
  [52, 849], // Ice Stone
  [70, 1103], // Rusted Sword
  [71, 1104], // Rusted Shield
  [72, 1109], // Strawberry Sweet
  [73, 1110], // Love Sweet
  [74, 1111], // Berry Sweet
  [75, 1112], // Clover Sweet
  [76, 1113], // Flower Sweet
  [77, 1114], // Star Sweet
  [78, 1115], // Ribbon Sweet
  [79, 1116], // Sweet Apple
  [80, 1117], // Tart Apple
  [81, 1253], // Cracked Pot
  [82, 1254], // Chipped Pot
  [83, 1582], // Galarica Cuff
  [84, 1592], // Galarica Wreath
  [85, 2344], // Auspicious Armor
  [86, 1861], // Malicious Armor
  [87, 2345], // Leader’s Crest
  [88, 1857], // Scroll of Darkness
  [89, 1858], // Scroll of Waters
  [92, 218], // Soothe Bell
  [93, 109], // Dawn Stone
  [94, 2403], // Unremarkable Teacup
  [95, 2404], // Masterpiece Teacup
  [96, 2402], // Syrupy Apple
  [111, 537], // Prism Scale
  [112, 325], // Reaper Cloth
  [113, 252], // Upgrade
  [114, 324], // Dubious Disc
  [115, 322], // Electirizer
  [116, 323], // Magmarizer
  [117, 321], // Protector
  [118, 235], // Dragon Scale
  [119, 2482], // Metal Alloy
]);
