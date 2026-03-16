import { useLocalStorageState } from "ahooks";
import { Alert } from "antd";

import { Icon, Link, onUseRequestError } from "@/utils";

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
            <Icon
              name="ditto"
              className="icon-inline"
              size={18}
            />
            <Link
              to="https://pokopia.xzonn.top"
              className="mx-2"
              target="_blank"
            >
              欢迎查询 Pokopia 数据库
            </Link>
            <Icon
              name="ditto"
              className="icon-inline"
              size={18}
            />
          </div>
        </div>
      }
      type="info"
      showIcon
    />
  ) : null;
};
