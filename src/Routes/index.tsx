import React from "react";
import { Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Route from "./routes";
import Markets from "../Pages/Markets";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/markets" component={Markets} />
  </Switch>
);

export default Routes;
