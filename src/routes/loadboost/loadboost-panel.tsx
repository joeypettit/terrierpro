import DataTable from "../../components/panel-table";
import Badge from "../../components/badge";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAllTreats, getTreats } from "../../app/slices/treats-slice";

const LoadBoostPanel = () => {
  const dispatch = useAppDispatch();
  const treats = useAppSelector(selectAllTreats);

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
        columnParams={columnParams}
        onRowClick={(row) => console.log("Row Click", row)}
      />
    </section>
  );
};

export default LoadBoostPanel;
