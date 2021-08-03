import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Destination from "./components/Destination";
import Event from "./components/Event";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/destinations">
        <Destination />
      </Route>
      <Route path="/event/:id">
        <Event />
      </Route>
    </Router>
  );
}

export default App;
