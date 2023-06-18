import React from 'react';
// import COLORS from '../../constants/COLORS';
import logo from '../../images/logo.jpeg';
import '../../styles/landing.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#home"><img src={logo} alt="" width="100%" height="40px"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li> 
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li> 
                <li className="nav-item">
                  <a className="nav-link" href="#category">Categories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">Blog</a>
                </li> 
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>        
              </ul>
            </div>
          </div>
    </nav>
    );
};

export default Navbar;