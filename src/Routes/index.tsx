import React from "react";
import { Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Route from "./routes";
import Markets from "../Pages/Markets";
import Catalog from "../Pages/Catalog";
import Cart from "../Pages/Cart";
import OrderDone from "../Pages/OrderDone";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/markets" component={Markets} />
    <Route path="/markets/:marketid" component={Catalog} />
    <Route path="/cart" component={Cart} />
    <Route path="/order-done" component={OrderDone} />
  </Switch>
);

export default Routes;
