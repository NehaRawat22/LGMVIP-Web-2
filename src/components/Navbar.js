import React, { Component } from 'react';
import './Navbar.css';
import users from './users.webp';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navMenu">
          <img src={users} style={{width:'auto', height: '100px'}} alt="" />
        <div className='contain'>
        <ul>
          <li><a className='nav' href="/">home</a></li>
          <li><a className='nav' href="/">archives</a></li>
          <li><a className='nav' href="/">tags</a></li>
          <li><a className='nav' href="/">categories</a></li>
          <li><a className='nav' href="/">about</a></li>
        </ul>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
