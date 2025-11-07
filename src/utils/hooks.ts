import { useRequest } from "ahooks";
import { message } from "antd";

import { aegis } from "./monitor";

const onUseRequestError = (error: any) => {
  const errorMessage = `${error?.message || error}`;
  if (/Failed to fetch dynamically imported module: https?:\/\/[^/]+\/assets\//.test(errorMessage)) {
    message.error("资源文件加载失败，请尝试刷新页面。");
  } else {
    message.error(`数据加载失败: ${errorMessage}`);
    aegis.error(error);
  }
};

export const useImport = <T>(callback: () => Promise<T>, refreshDeps: any[] = [], ignoreError = false) => {
  const {
    data = null,
    loading,
    ...rest
  } = useRequest(callback, {
    refreshDeps,
    onError: ignoreError
      ? (error) => {
          if (error.message.includes("Unknown variable dynamic import")) {
            return;
          }

          onUseRequestError(error);
        }
      : onUseRequestError,
  });

  return [data, loading, rest] as [T | null, boolean, Omit<ReturnType<typeof useRequest>, "data" | "loading">];
};
