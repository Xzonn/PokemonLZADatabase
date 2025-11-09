import { Stat } from "./constants";

export interface NatureItem {
  id: number;
  name: string;
  "+": Stat;
  "-": Stat;
}
