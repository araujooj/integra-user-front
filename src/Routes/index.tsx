import React from "react";
import { Switch } from "react-router-dom";
import Home from "../pages/Home";
import Route from './routes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/home" component={Home} />
  </Switch>
);

export default Routes;
