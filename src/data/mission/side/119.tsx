import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 119,
  internal: 88,
  summary: "著名的由紫锦标赛全新升级，重磅回归了！参赛者竟然只有由紫和（主角）二人！",
  process: ["前往秀丽世大酒店的宴会厅。", "在超级由紫锦标赛Ｄ一路获胜并夺冠。"],
  location: "秀丽世大酒店",
  unlockCondition: (
    <>
      在<Link to="/ＺＡ登峰战">ＺＡ登峰战</Link>的报酬战中胜利 20 场
    </>
  ),
  bvid: "BV1pK4UzoEoF",
  cid: "25935484154",
};
