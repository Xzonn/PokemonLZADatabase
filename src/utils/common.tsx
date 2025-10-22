import { DescriptionsProps, TablePaginationConfig, TableProps } from "antd";
import { ColumnFilterItem } from "antd/es/table/interface";

import { EMoveCategory, EPokemonType, MoveCategory } from "@/types";

export const DefaultTitle = "宝可梦传说 Z-A 数据库";

export const renderCategory = (category: MoveCategory) => (
  <span className={`badge-category bg-${category}`}>{category}</span>
);

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
    case -3:
      return "进化";
    default:
      return level.toString();
  }
};
