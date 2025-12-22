import { useMemo } from "react";

import { LumioseMap, LysandreLabsMap, SewersCh5Map, SewersCh6Map } from "@/components";

export const useGameMap = (location?: string) =>
  useMemo(() => {
    switch (location) {
      case "弗拉达利研究所":
        return { MapComponent: LysandreLabsMap, imageSize: 2160 };
      case "下水道 1":
        return { MapComponent: SewersCh5Map, imageSize: 2160 };
      case "下水道 2":
        return { MapComponent: SewersCh6Map, imageSize: 2160 };
      default:
        return { MapComponent: LumioseMap, imageSize: 4096 };
    }
  }, [location]);
