import DataTable from "../../components/panel-table";
import Badge from "../../components/badge";
import type { Treat } from "../../app/types/treat.type";
import type { PanelTableColumn } from "../../components/panel-table";
import PanelWindow from "../../components/panel-window";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAllTreats, getTreats } from "../../app/slices/treats-slice";

const LoadBoostPanel = () => {
  const dispatch = useAppDispatch();
  const treats = useAppSelector(selectAllTreats);

  const columns: PanelTableColumn<Treat>[] = [
    {
      columnName: "treat",
      dataObjectKey: "name",
      orderIndex: 1,
      headerRenderer: () => "Treat",
      cellRenderer: (treat) => <span>{treat?.name}</span>,
    },
    {
      columnName: "Flavor",
      dataObjectKey: "flavor",
      orderIndex: 2,
      cellRenderer: (treat) => (
        <span className="flex justify-center">
          <Badge text={treat?.flavor} />
        </span>
      ),
    },
    {
      columnName: "Calorie",
      dataObjectKey: "calories",
      orderIndex: 4,
      headerRenderer: () => "Calories (kcal)",
      cellRenderer: (treat) => <span>{treat?.calories} kcal</span>,
    },
    {
      columnName: "Ingredients",
      dataObjectKey: "ingredients",
      orderIndex: 3,

      cellRenderer: (treat) => (
        <ul>
          {treat?.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      ),
    },
    {
      columnName: "Made Up",
      orderIndex: 1,
      headerRenderer: () => "Made Up",
      cellRenderer: () => <input type="checkbox" />,
    },
  ];

  return (
    <PanelWindow>
      <button
        className="p-4"
        onClick={() => {
          dispatch(getTreats());
        }}
      >
        +
      </button>
      <p>state is: {treats.map((treat) => treat.calories)}</p>
      <DataTable
        data={treats}
        columns={columns}
        onRowClick={(row) => console.log("Row Click", row)}
      />
    </PanelWindow>
  );
};

export default LoadBoostPanel;
