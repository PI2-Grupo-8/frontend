import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage'
import CreateVehicle from './pages/CreateVehicle'

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/create_vehicle" exact component={CreateVehicle} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;