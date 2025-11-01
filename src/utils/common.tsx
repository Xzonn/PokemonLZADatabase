import { DescriptionsProps, TablePaginationConfig, TableProps, message } from "antd";
import { ColumnFilterItem } from "antd/es/table/interface";

import { EMoveCategory, EPokemonType } from "@/types";

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

export const MoveCategoryFilters: ColumnFilterItem[] = EMoveCategory.map((category: any) => ({
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
  message.error(`数据加载失败: ${error?.message || error}`);
};
