import { createBrowserRouter } from "react-router-dom";
import TerrierProNavBar from "./nav/navbar.tsx";
import ErrorPage from "./error-page.tsx";
import LoadBoostPanel from "./routes/loadboost/loadboost-panel.tsx";
import LoadsPanel from "./routes/loads-panel.tsx";
import TripsPanel from "./routes/trips-panel.tsx";

function determineRouter() {
  // in future, I could use the domain name to conditionally return
  // different routers for different applications
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <TerrierProNavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/loadboost",
        element: <LoadBoostPanel />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/trips",
        element: <TripsPanel />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/loads",
        element: <LoadsPanel />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
