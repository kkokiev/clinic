import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFound extends Component {

  getMessage() {
    if (this.props.message)
      return (
        <div>
          <h1>404</h1><h1>{this.props.message}</h1>
        </div>
      )
    else
      return (
        <div>
          <h1>404</h1><h1>Page not found</h1>
        </div>
      )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="mx-auto">
            <center>
              {this.getMessage()}
              <Link to="/login" className="btn btn-lg btn-primary">
                <i className="fa fa-arrow-left"></i> Back to main
              </Link>
            </center>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;
