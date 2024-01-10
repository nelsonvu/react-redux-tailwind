import { TTailwindString } from '@frontend/tailwindcss-classnames';
import { CellContext, ColumnDef } from '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    // Your additional properties here
    getCellClassNames: (context: CellContext<TData, TValue>) => TTailwindString;
  }
}

export type TableProps = {
  data: any[];
  columns: ColumnDef<any, any>[];
  headerClassnames?: TTailwindString;
  rowClassnames?: TTailwindString;
};
