import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: -1,
  internal: 119,
  summary: "喵茸见到（主角）带着的超级石后，捕捉到心灵感应并开始行动了。它是要去哪里呢？",
  process: ["跟上捕捉到神秘心灵感应的喵茸。", "捕捉蒂安希。"],
  location: "帅哥侦探事务所",
  unlockCondition: (
    <>
      获得了<Link to="/i/蒂安希进化石">蒂安希进化石</Link>
    </>
  ),
  bvid: "BV1pK4UzoEoF",
  cid: "25930963289",
};
