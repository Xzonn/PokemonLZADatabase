import { useLocalStorageState } from "ahooks";
import { Alert } from "antd";

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
    <Alert
      className="notice"
      message={
        <>
          <Link to="/宝可梦分布">宝可梦分布互动地图</Link>已更新筛选宝可梦功能，欢迎体验！
        </>
      }
      type="success"
      showIcon
    />
  ) : null;
};
