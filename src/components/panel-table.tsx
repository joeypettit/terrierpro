interface ColumnParams<T> {
  visible?: boolean;
  order?: number;
  headerRenderer?: () => React.ReactNode;
  cellRenderer?: (value: T) => React.ReactNode;
}

interface TableProps<T extends object> {
  data: T[];
  columnParams?: {
    [key in keyof T]?: ColumnParams<T[key]>;
  };
  onRowClick?: (row: T) => void; // Optional function to handle row clicks
}

function DataTable<T extends object>({
  data,
  columnParams = {},
  onRowClick,
}: TableProps<T>) {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  let columns = Object.keys(data[0]) as (keyof T)[];
  columns = filterNonVisibleColumns(columns);
  columns = determineColumnOrder(columns);

  function determineColumnOrder(columns: (keyof T)[]) {
    return columns.sort((a, b) => {
      const orderA = columnParams[a]?.order;
      const orderB = columnParams[b]?.order;
      // If order is undefined, push it to the back
      if (orderA === undefined && orderB === undefined) return 0;
      if (orderA === undefined) return 1;
      if (orderB === undefined) return -1;
      // Else return as indicated with order property
      return orderA - orderB;
    });
  }

  function filterNonVisibleColumns(columns: (keyof T)[]) {
    return columns.filter((key) => columnParams[key]?.visible !== false);
  }

  function renderHeader(header: keyof T, index: number) {
    const headerRenderer = columnParams[header]?.headerRenderer;
    return (
      <th key={index} className="px-4 py-2 border-b border-gray-400">
        {headerRenderer ? headerRenderer() : String(header)}
      </th>
    );
  }

  function renderCellContents(header: keyof T, row: T, cellIndex: number) {
    const cellData = row[header];
    const cellRenderer = columnParams[header]?.cellRenderer;

    return (
      <td key={cellIndex} className="px-4 py-2">
        {cellRenderer ? cellRenderer(cellData) : String(cellData)}
      </td>
    );
  }

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>{columns.map((header, index) => renderHeader(header, index))}</tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            onClick={() => onRowClick && onRowClick(row)}
            className="cursor-pointer bg-gray-white odd:bg-blue-50 hover:bg-blue-100 active:shadow-inner"
          >
            {columns.map((header, cellIndex) =>
              renderCellContents(header, row, cellIndex)
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
