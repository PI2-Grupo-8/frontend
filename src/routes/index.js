import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Homepage from '../pages/HomePage'
import CreateVehicle from '../pages/CreateVehicle'
import UpdateVehicle from '../pages/UpdateVehicle'
import ControlPanel from '../pages/ControlPanel';
import Alerts from '../pages/Alerts';
import './style.css'
import Register from '../pages/Register';
import { isAuthenticated } from '../services/auth';
import EditProfile from '../pages/EditProfile';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

const PrivateRoute = ({ Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const PublicOnlyRoute = ({ Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated() ? (
        <Component {...props} />
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
          <PublicOnlyRoute path="/forgotpassword" exact component={ForgotPassword} />
          <PublicOnlyRoute path="/auth/reset_password" exact component={ResetPassword} />
          <PrivateRoute path="/profile" exact Component={EditProfile} />
          <PrivateRoute path="/vehicle/:id" exact component={ControlPanel} />
          <PrivateRoute path="/vehicle/create" exact Component={CreateVehicle} />
          <PrivateRoute path="/vehicle/edit/:id" exact Component={UpdateVehicle} />
          <PrivateRoute path="/alerts" exact component={Alerts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Routes;