import { DescriptionsProps, TablePaginationConfig, TableProps, message } from "antd";
import { ColumnFilterItem } from "antd/es/table/interface";

import { EMoveCategory, EPokemonType, MissionCategory } from "@/types";

export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

export const DEFAULT_TITLE = "宝可梦传说 Z-A 数据库";

export const PokemonTypeFilters: ColumnFilterItem[] = EPokemonType.map((type) => ({
  text: type,
  value: type,
}));

export const MoveCategoryFilters: ColumnFilterItem[] = EMoveCategory.map((category) => ({
  text: category,
  value: category,
}));

export const TableCommonProps: Partial<TableProps<any>> = {
  scroll: {
    scrollToFirstRowOnChange: true,
    x: true,
  },
  sticky: { offsetHeader: 0 },
  size: "small",
  tableLayout: "fixed",
};

export const DescriptionsCommonProps: Partial<DescriptionsProps> = {
  size: "small",
  bordered: true,
  column: { xs: 1, sm: 1, md: 1, lg: 3, xl: 3, xxl: 3 },
};

export const DescriptionsCommonProps1: Partial<DescriptionsProps> = {
  ...DescriptionsCommonProps,
  className: "description-1",
  column: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 },
};

export const DescriptionsCommonProps2: Partial<DescriptionsProps> = {
  ...DescriptionsCommonProps,
  className: "description-2",
  column: { xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 },
};

export const DescriptionsCommonProps4: Partial<DescriptionsProps> = {
  ...DescriptionsCommonProps,
  className: "description-4",
  column: { xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 4 },
};

export const PaginationConfig: TablePaginationConfig = {
  defaultPageSize: 100,
  showSizeChanger: true,
  pageSizeOptions: ["100", "200", "500", "1000"],
};

export const renderMoveLevel = (level: number): string => {
  switch (level) {
    case 1:
      return "—";
    case -2:
      return "回忆";
    case -3:
      return "进化";
    default:
      return level.toString();
  }
};

export const onUseRequestError = (error: any) => {
  const errorMessage = `${error?.message || error}`;
  if (/Failed to fetch dynamically imported module: https?:\/\/[^/]+\/assets\//.test(errorMessage)) {
    message.error("资源文件加载失败，请尝试刷新页面。");
  } else {
    message.error(`数据加载失败: ${errorMessage}`);
  }
};

export const halfToFull = (str: string): string =>
  str.replace(/[!-~]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) + 0xfee0));

export const fullToHalf = (str: string): string =>
  str.replace(/[！-～]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xfee0));

export const getMissionIndex = (id: number) => (id > 0 ? id.toString().padStart(3, "0") : `EX${-id}`);

export const getMissionCategory = (category: MissionCategory): string => {
  switch (category) {
    case "主":
      return "主任务";
    case "副":
      return "副任务";
    case "异":
      return "异次元";
  }
};

export const getMissionDirectory = (category: MissionCategory): string => {
  switch (category) {
    case "主":
      return "main";
    case "副":
      return "side";
    case "异":
      return "hyperspace";
  }
};

export const parseTSV = <T,>(raw: string, handleDict: (dict: Record<string, string>) => T): T[] => {
  const lines = raw.trim().split("\n");
  const header = lines[0].split("\t");

  return lines.slice(1).map((line) => {
    const parts = line.split("\t");
    const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
    return handleDict(dict);
  });
};
