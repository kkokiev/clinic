import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class Sidebar extends Component {
  logoutHandle = (e) => {
    e.preventDefault();
    Meteor.logout();
    browserHistory.push('/login');
  }

  render() {
    return (
      <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/departments">Departments</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/positions">Positions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/staff">Staff</Link>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/admin/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/clients">Clients</Link>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/login"
              onClick={this.logoutHandle}
            >Log out
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
