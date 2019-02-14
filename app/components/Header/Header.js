import React from 'react';
import { Link } from 'react-router-dom';
// import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <h1>Fix Me!</h1>
        <h3>I is broke</h3>
        
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
