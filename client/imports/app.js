import React from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import {
  Router,
  Route,
  IndexRedirect,
  browserHistory
} from 'react-router';

import Landing from './landing';
import Login from './login';
import AdminMain from './admin-main';
import NotFound from './notfound';

const App = () => {
  
  const adminCheck = (nextState, replace) => {
    const loggingIn = Meteor.loggingIn();
    const userId = Meteor.userId();
    const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');

    if (!loggingIn && !userId && !isAdmin) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };


  // Math.random() react-router v3 workaround
  return (
    <Router history={browserHistory} key={Math.random()}>
      <Route path="/" component={Landing}>
        <IndexRedirect to="/login" />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/admin" component={AdminMain} onEnter={adminCheck} />
      <Route path="/*" component={NotFound} />
    </Router>
  );
};

// @TODO clear up 
export default withTracker((props) => {
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();
  const userId = Meteor.userId();
  const loading = Roles.subscription ? !Roles.subscription.ready() : true;

  return {
    loggingIn,
    loading,
    user,
    userId,
    authenticated: !loggingIn && !!userId,
    roles: !loading && Roles.getRolesForUser(userId)
  };
})(App);
