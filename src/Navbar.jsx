// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import LiveTvIcon from '@mui/icons-material/LiveTv';

function Navbar() {
      return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary mb-lg-0">

                  <div className="container-fluid">
                  <Link className="navbar-brand text-white" to="/">
                              <LiveTvIcon style={{ fontSize: '2.5rem',marginLeft:'5rem' }} /> 
                        </Link>
                        <button
                              className="navbar-toggler"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarNav"
                              aria-controls="navbarNav"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                        >
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                          <Link className="nav-link text-white" style={{ fontSize: '1.2rem' }} to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link className="nav-link text-white" style={{ fontSize: '1.2rem' }} to="/provider-login">Provider Login</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link className="nav-link text-white" style={{ fontSize: '1.2rem' }} to="/user-login">User Login</Link>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </nav>
      );
}

export default Navbar;
