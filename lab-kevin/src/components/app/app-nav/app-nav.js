import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
  render(){
    return(
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/dashboard">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/ui-challenge">UI Challenge</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;