import React from "react";
import { Link } from "react-router-dom";
// import {  } from 'react-router-dom'

export default class GuestLayout extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <header className="hero is-light">
          <div className="hero-head container">
            <nav
              className="navbar has-shadow"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <Link className="navbar-item is--brand" to="/sofa">
                  Sofa
                </Link>
                <Link className="navbar-item is--brand" to="/bed">
                  Giường
                </Link>
                <Link className="navbar-item is--brand" to="/recliner">
                  Thư giản - Xem phim
                </Link>
                <Link to="/logout" className="navbar-item is-pulled-right">
                  Logout
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <br />
        <div className="wrapper container p-l-md p-r-md">
          <div className="columns">
            <main className="column main">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="title has-text-primary">
                      {/* <i className="fa fa-tachometer" /> Giường */}
                    </div>
                  </div>
                </div>
              </div>
              {children}
            </main>
          </div>
        </div>
      </div>
    );
  }
}
