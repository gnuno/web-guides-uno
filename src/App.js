import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from './pages/Index';
import Map from './pages/Map';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact strict path='/' render={() => <Index/>} />
          <Route exact strict path='/:name' render={() => <Map/>} />
        </Switch>
      </Router>
    </>
  );
}