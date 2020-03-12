import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Starship } from './components/Starship';
import { Characters } from './components/Characters';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route
          exact
          path="/starship"
          component={props => <Starship {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
