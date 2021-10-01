import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/HomePage'
import ControlPanel from './pages/ControlPanel'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/vehicle/:id" exact component={ControlPanel} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;