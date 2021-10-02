import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Homepage from '../pages/HomePage'
import CreateVehicle from '../pages/CreateVehicle'
import UpdateVehicle from '../pages/UpdateVehicle'
import ControlPanel from '../pages/ControlPanel';
import './style.css'

const Routes = () => {
  return (
    <div className="page">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/vehicle/create" exact component={CreateVehicle} />
          <Route path="/vehicle/edit/:id" exact component={UpdateVehicle} />
          <Route path="/vehicle/:id" exact component={ControlPanel} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Routes;