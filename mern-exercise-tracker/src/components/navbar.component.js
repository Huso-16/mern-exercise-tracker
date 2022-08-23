import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Navigation bar
 */
export default class Navbar extends React.Component {
  /**
    * Component responsible to display the top navigation bar.
    * @return {React.ReactNode} component to show the nabvar
    */
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg' >
        <Link to='/' className='navbar-brand'>Exercise Tracker</Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <Link to="/" className='nav-link'>Exercises</Link>
            </li>
            <li className='navbar-item'>
              <Link to="/create" className='nav-link'>Create Exercise Log</Link>
            </li>
            <li className='navbar-item'>
              <Link to="/user" className='nav-link'>Create User</Link>
            </li>
          </ul>
        </div>
      </nav >
    );
  }
}

