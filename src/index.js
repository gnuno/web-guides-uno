import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from './pages/Index';
import Map from './pages/Map';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route exact strict path='/' render={() => <Index/>} />
          <Route exact strict path='/:name' render={() => <Map/>} />
        </Switch>
      </Router>
  </React.StrictMode>,
  
  document.getElementById('root')
);