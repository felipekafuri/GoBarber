import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import SingIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SingIn} />
      <Route path="/signup" component={SingUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
