import { ReactNode } from "react";

import { Link } from "@/components/Link";
import { TM } from "@/types";

export const getTMMethod = (tm: TM): ReactNode => {
  if (tm.researchLevel) {
    return (
      <>
        <Link to="/茉蜜姬调查">茉蜜姬调查</Link>（{tm.researchLevel} 级）
      </>
    );
  } else if (tm.sideMission) {
    return (
      <>
        <Link to="/副任务一览">副任务</Link> #{tm.sideMission.toString().padStart(3, "0")}
      </>
    );
  } else if (tm.location) {
    return tm.location;
  }
  return "—";
};
