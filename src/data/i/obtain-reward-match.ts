import { parseObtain } from "@/utils";

import obtain_reward_match_guaranteed from "./obtain-reward-match-guaranteed.txt?raw";
import obtain_reward_match_random from "./obtain-reward-match-random.txt?raw";

export const ObtainDataRewardMatchGuaranteed = parseObtain(obtain_reward_match_guaranteed);
export const ObtainDataRewardMatchRandom = parseObtain(obtain_reward_match_random);
