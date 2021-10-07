import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Homepage from '../pages/HomePage'
import CreateVehicle from '../pages/CreateVehicle'
import UpdateVehicle from '../pages/UpdateVehicle'
import './style.css'
import Register from '../pages/Register';
import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <div className="page">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/signup" exact component={Register} />
          <PrivateRoute path="/vehicle/create" exact component={CreateVehicle} />
          <PrivateRoute path="/vehicle/edit/:id" exact component={UpdateVehicle} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Routes;