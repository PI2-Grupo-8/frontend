import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Homepage from '../pages/HomePage'
import CreateVehicle from '../pages/CreateVehicle'
import './style.css'

const Routes = () => {
  return (
    <div className="page">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/create_vehicle" exact component={CreateVehicle} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Routes;