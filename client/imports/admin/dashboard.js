import React from 'react';
import { Link } from 'react-router';

import Sidebar from './sidebar';

const placeholders = {
  blue: 'data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=',
  green: 'data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs='
};

const Dashboard = () =>
  <div className="container-fluid">
    <div className="row">
      <Sidebar />
      <div role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
        <h1>Dashboard</h1>
        <section className="row text-center placeholders">
          <div className="col-6 col-sm-3 placeholder">
            <Link to="/admin/clients">
              <img
                src={placeholders.blue}
                width={200}
                height={200}
                className="img-fluid rounded-circle"
                alt="Generic placeholder thumbnail"
              />
              <h4 style={{ color: '#000' }}>Clients</h4>
              <div className="text-muted">1</div>
            </Link>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <Link to="/admin/departments">
              <img
                src={placeholders.green}
                width={200}
                height={200}
                className="img-fluid rounded-circle"
                alt="Generic placeholder thumbnail"
              />
              <h4 style={{ color: '#000' }}>Departments</h4>
              <span className="text-muted">1</span>
            </Link>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <Link to="/admin/staff">
              <img
                src={placeholders.blue}
                width={200}
                height={200}
                className="img-fluid rounded-circle"
                alt="Generic placeholder thumbnail"
              />
              <h4 style={{ color: '#000' }}>Staff</h4>
              <span className="text-muted">1</span>
            </Link>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <Link to="/admin/users">
              <img
                src={placeholders.green}
                width={200}
                height={200}
                className="img-fluid rounded-circle"
                alt="Generic placeholder thumbnail"
              />
              <h4 style={{ color: '#000' }}>Users</h4>
              <span className="text-muted">1</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  </div>;

export default Dashboard;
