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
            <Link to="/联网活动#神秘礼物">神秘礼物</Link>可领取“大型喷火龙（头目）”！密语：B1G0006
          </div>
          <div>DLC《超次元爆涌》相关数据将逐步添加，如遇到“资源文件加载失败”提示，请尝试刷新页面！</div>
        </div>
      }
      type="info"
      showIcon
    />
  ) : null;
};
