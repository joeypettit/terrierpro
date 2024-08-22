import DataTable from "../../components/panel-table";
import Badge from "../../components/badge";
import type { Treat } from "../../app/types/treat.type";
import type { PanelTableColumn } from "../../components/panel-table";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAllTreats, getTreats } from "../../app/slices/treats-slice";

const LoadBoostPanel = () => {
  const dispatch = useAppDispatch();
  const treats = useAppSelector(selectAllTreats);

  const columns: PanelTableColumn<Treat>[] = [
    {
      columnName: "treat",
      dataObjectKey: "name",
      headerRenderer: () => "Treat",
      cellRenderer: (treat) => <span>{treat!.name}</span>,
    },
    {
      columnName: "Flavor",
      dataObjectKey: "flavor",
      cellRenderer: (treat) => (
        <span className="flex justify-center">
          <Badge text={treat!.flavor} />
        </span>
      ),
    },
    {
      columnName: "Calorie",
      dataObjectKey: "calories",
      headerRenderer: () => "Calories (kcal)",
      cellRenderer: (treat) => <span>{treat!.calories} kcal</span>,
    },
    {
      columnName: "Ingredients",
      dataObjectKey: "ingredients",
      cellRenderer: (treat) => (
        <ul>
          {treat!.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      ),
    },
    {
      columnName: "Made Up",
      headerRenderer: () => "Made Up",
      cellRenderer: () => <input type="checkbox" />,
    },
  ];

  return (
    <section>
      <div>
        sj;lkasdjf;lkasdjf;lkjasd;lfjasd;lkfjasd;lkfjasd;lkfjasd;lkfjs;lk
      </div>
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
    </section>
  );
};

export default LoadBoostPanel;
