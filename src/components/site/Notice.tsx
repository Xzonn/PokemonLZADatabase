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
        <div className="space-y-2">
          <div>
            <Link to="/h/一般">野生异次元</Link>和<Link to="/对战异次元">对战异次元</Link>
            的数据已添加！如遇到“资源文件加载失败”提示，请尝试刷新页面！
          </div>
        </div>
      }
      type="info"
      showIcon
    />
  ) : null;
};
