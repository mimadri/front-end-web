import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Property from './views/Property';
import NotFound from './views/NotFound';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/property/:id" component={Property} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
