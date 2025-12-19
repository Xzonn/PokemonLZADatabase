import { MegaEvolution, PokemonForm } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./mega-evolution.txt?raw";

export const MegaEvolutionData = parseTSV<MegaEvolution>(raw, (dict) => {
  const index = parseInt(dict["编号"], 10).toString().padStart(3, "0");
  const form = parseInt(dict["形态编号"], 10);
  const megaForm = parseInt(dict["超级形态编号"], 10);

  return {
    normal: `${index}-${form}` as PokemonForm,
    mega: `${index}-${megaForm}` as PokemonForm,
    stone: dict["超级石"],
    obtain: dict["超级石获取方式"],
    missionIndex: dict["任务编号"] ? parseInt(dict["任务编号"], 10) : null,
  };
});
