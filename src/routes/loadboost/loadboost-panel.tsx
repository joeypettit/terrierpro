import data from "./loadboost-test-data.json";
import DataTable from "../../components/panel-table";
import Badge from "../../components/badge";

const LoadBoostPanel = () => {
  const columnParams = {
    name: {
      visible: true,
      order: 1,
      headerRenderer: () => <strong>Dog Treat Name</strong>,
      cellRenderer: (value: string) => <em>{value}</em>,
    },
    flavor: {
      visible: true,
      cellRenderer: (value: string) => <Badge text={value} />,
    },
    calories: {
      visible: true,
      order: 2,
      headerRenderer: () => <strong>Calories (kcal)</strong>,
      cellRenderer: (value: number) => <span>{value} kcal</span>,
    },
    ingredients: {
      visible: true,
      order: 3,
      headerRenderer: () => <strong>Ingredients</strong>,
      cellRenderer: (value: string[]) => (
        <ul>
          {value.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      ),
    },
    location: {
      visible: false, // Hide the location column
    },
  };

  return (
    <section>
      <DataTable
        data={data["dogTreats"]}
        columnParams={columnParams}
        onRowClick={(row) => console.log("Row Click", row)}
      />
    </section>
  );
};

export default LoadBoostPanel;
