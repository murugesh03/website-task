import React, { Component } from "react";
import "./NavBar.css";
import { MdMailOutline } from "react-icons/md";
import { Link, BrowserRouter as Router } from "react-router-dom";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <nav className="navbar navbar-transparent is-fixed-top">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <p>
                FIT<span className="navlogo">ME</span>
              </p>
            </Link>
            <div
              className="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/schedule" className="navbar-item">
                <p> Schedule</p>
              </Link>
              <Link to="overview" className="navbar-item">
                <p> Overview</p>
              </Link>
              <Link to="articles" className="navbar-item">
                <p> Articles</p>
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link to="mail" target="_blank">
                      <span>
                        <MdMailOutline />
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Router>
    );
  }
}

export default NavBar;
