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
        数据正在逐步添加中，已支持互动地图，感谢 <Link to="https://github.com/kwsch/pkNX">pkNX</Link> 的开发者！
      </p>
    </div>
  ) : null;
};
