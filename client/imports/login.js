import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const email = this.email.value;
    const password = this.password.value;

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        Bert.alert({
          title: 'Error',
          message: error.reason,
          type: 'danger',
          style: 'growl-top-right',
          icon: 'fa-times'
        });
      } else {
        Bert.alert({
          title: 'Successful login',
          message: 'Welcome, ' + Meteor.user().profile.first_name + '!',
          type: 'success',
          style: 'growl-top-right',
          icon: 'fa-user'
        });
        
        if (Meteor.user().roles.indexOf('admin') > -1) {
          browserHistory.push('/admin');
        } else {
          browserHistory.push('/client');
        }
      }
    });
  }

  render() {
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputEmail">Username</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            ref={input => (this.email = input)}
          />
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            ref={input => (this.password = input)}
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
          >Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
