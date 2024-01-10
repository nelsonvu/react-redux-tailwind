import { useEffect, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { TableProps } from './types';
import classnames, { sizing, spacing } from '@frontend/tailwindcss-classnames';

export const Table = (props: TableProps) => {
  const { data, columns, headerClassnames, rowClassnames } = props;

  const [tableData, setTableData] = useState(() => [...data]);
  const styles = useStyles();

  useEffect(() => {
    setTableData([...data]);
  }, [data]);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className={classnames(styles.table)}>
        <thead className={classnames(headerClassnames)}>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className={classnames(styles.cell)}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className={classnames(rowClassnames)}>
              {row.getVisibleCells().map(cell => {
                const cellContext = cell.getContext();

                const cellClassNames =
                  cellContext.cell.column.columnDef.meta?.getCellClassNames(
                    cellContext,
                  );

                return (
                  <td
                    key={cell.id}
                    className={classnames(styles.cell, cellClassNames)}
                  >
                    {flexRender(cell.column.columnDef.cell, cellContext)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const useStyles = () => {
  return {
    table: classnames(sizing('w-full')),
    cell: classnames(spacing('p-2')),
  };
};
