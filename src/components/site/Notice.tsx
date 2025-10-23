import { useLocalStorageState } from "ahooks";

export const Notice: React.FC = () => {
  const [show] = useLocalStorageState("notice-lza-database", {
    defaultValue: true,
    onError: () => null,
  });

  return show ? (
    <div className="bg-white text-center sm:rounded-2xl sm:shadow-xl m-0 sm:mx-2 lg:mx-4 p-4 sm:mt-4">
      <p>
        《宝可梦传说 Z-A》数据库开发中……感谢{" "}
        <a
          href="https://github.com/kwsch/pkNX"
          target="_blank"
          rel="noreferrer"
        >
          pkNX
        </a>{" "}
        的开发者！
      </p>
      <p>
        数据正在逐步添加中，预计会像
        <a
          href="https://sv.xzonn.top/"
          target="_blank"
          rel="noreferrer"
        >
          《宝可梦 朱／紫》数据库
        </a>
        一样支持互动地图，敬请期待！
      </p>
    </div>
  ) : null;
};
