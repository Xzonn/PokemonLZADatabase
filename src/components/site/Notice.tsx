import { useLocalStorageState } from "ahooks";

import { Link, onUseRequestError } from "@/utils";

export const Notice: React.FC = () => {
  const [show] = useLocalStorageState("notice-lza-database", {
    defaultValue: true,
    onError: (error) => {
      onUseRequestError(error);
      localStorage.removeItem("notice-lza-database");
    },
  });

  return show ? (
    <div className="notice">
      <p>
        《宝可梦传说 Z-A》数据库开发中……感谢 <Link to="https://github.com/kwsch/pkNX">pkNX</Link> 的开发者！
      </p>
      <p>
        数据正在逐步添加中，预计会像
        <Link to="https://sv.xzonn.top/">《宝可梦 朱／紫》数据库</Link>
        一样支持互动地图，敬请期待！
      </p>
    </div>
  ) : null;
};
