import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';

const hatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
);

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/hats" component={hatsPage} />
      </Switch>
    </div>
  );
};

export default App;
