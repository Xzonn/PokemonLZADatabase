import { ItemLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: -1,
  internal: 119,
  summary: "喵茸见到（主角）带着的超级石后，捕捉到心灵感应并开始行动了。它是要去哪里呢？",
  process: ["跟上捕捉到神秘心灵感应的喵茸。", "捕捉蒂安希。"],
  location: "帅哥侦探事务所",
  unlockCondition: (
    <>
      获得了
      <ItemLink name="蒂安希进化石" />
    </>
  ),
  bvid: "BV1pK4UzoEoF",
  cid: "25930963289",
};
