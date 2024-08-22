export interface PanelTableColumn<T> {
  columnName: string;
  dataObjectKey?: keyof T | undefined | null;
  isVisible?: boolean;
  headerRenderer?: () => React.ReactNode;
  cellRenderer?: (rowData: T) => React.ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns?: PanelTableColumn<T>[];
  onRowClick?: (row: T) => void; // Optional function to handle row clicks
}

function DataTable<T extends object>({
  data,
  columns = [],
  onRowClick,
}: TableProps<T>) {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  // let columns = Object.keys(data[0]) as (keyof T)[];
  // columns = filterNonVisibleColumns(columns);
  // columns = determineColumnOrder(columns);

  // function determineColumnOrder(columns: (keyof T)[]) {
  //   return columns.sort((a, b) => {
  //     const orderA = columnParams[a]?.order;
  //     const orderB = columnParams[b]?.order;
  //     // If order is undefined, push it to the back
  //     if (orderA === undefined && orderB === undefined) return 0;
  //     if (orderA === undefined) return 1;
  //     if (orderB === undefined) return -1;
  //     // Else return as indicated with order property
  //     return orderA - orderB;
  //   });
  // }

  // function filterNonVisibleColumns(columns: (keyof T)[]) {
  //   return columns.filter((key) => !== false);
  // }

  function renderHeader(column: PanelTableColumn<T>, index: number) {
    if (column.isVisible === false) return;
    const headerRenderer = column?.headerRenderer;
    return (
      <th key={index} className="px-4 py-2 border-b border-gray-400">
        {headerRenderer ? headerRenderer() : column.columnName}
      </th>
    );
  }

  function renderCellContents(
    column: PanelTableColumn<T>,
    row: T,
    cellIndex: number
  ) {
    if (column.isVisible === false) return;
    const cellRenderer = column?.cellRenderer;

    return (
      <td key={cellIndex} className="px-4 py-2">
        {cellRenderer
          ? cellRenderer(row)
          : String(column.dataObjectKey ? row[column.dataObjectKey] : "")}
      </td>
    );
  }

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>{columns.map((column, index) => renderHeader(column, index))}</tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr
            key={rowIndex}
            onClick={() => onRowClick && onRowClick(rowData)}
            className="cursor-pointer bg-gray-white odd:bg-blue-50 hover:bg-blue-100 active:shadow-inner"
          >
            {columns.map((column, cellIndex) =>
              renderCellContents(column, rowData, cellIndex)
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
