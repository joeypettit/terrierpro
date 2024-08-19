const PanelTable = ({ data }: { data: String }) => {
  // Extract the data array using the provided key
  const tableData = data;

  // Ensure there's data and it's an array
  if (!tableData || !Array.isArray(tableData) || tableData.length === 0) {
    return <p>No data available</p>;
  }

  // Extract the table headers from the keys of the first object
  const headers = Object.keys(tableData[0]);

  return (
    <table className="min-w-full table-auto border-collapse border border-gray-400">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="px-4 py-2 border border-gray-400 bg-gray-200"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <td key={cellIndex} className="px-4 py-2 border border-gray-400">
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PanelTable;
