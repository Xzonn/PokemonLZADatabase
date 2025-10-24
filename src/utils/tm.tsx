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
    return <>副任务 {tm.sideMission}</>;
  } else if (tm.location) {
    return tm.location;
  }
  return "—";
};
