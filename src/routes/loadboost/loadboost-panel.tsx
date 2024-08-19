import data from "./loadboost-test-data.json";
import PanelTable from "../../components/panel-table";

const LoadBoostPanel: React.FC = () => {
  return (
    <section>
      <h2>About Us</h2>
      <p>
        Our company was founded with the goal of providing the best service to
        our customers.
      </p>
      <p>We believe in quality, customer satisfaction, and innovation.</p>
      <PanelTable data={data["dogTreats"]} />
    </section>
  );
};

export default LoadBoostPanel;
