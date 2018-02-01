import React, { Component } from 'react';
import Alert from 'react-s-alert';
import { browserHistory } from 'react-router';

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const email = this.email.value;
    const password = this.password.value;

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        Alert.error(error.reason, {
          effect: 'jelly'
        });
      } else {

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
