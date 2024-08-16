import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import SideNavBar from "./nav/navbar";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <SideNavBar />
      </Router>
    </Provider>
  );
};

export default App;
