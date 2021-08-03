import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1> Chapeaux Baby</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/chapeaux" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
