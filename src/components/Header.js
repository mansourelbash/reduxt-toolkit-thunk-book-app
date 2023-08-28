import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>
      <Link to="/dashboard"> Dashboard </Link>
      <Link to="/elders"> Elders </Link>
      <Link to="/items"> Items </Link>

      <button className='btn btn-outline-primary' type='submit'>
        Log In
      </button>
    </nav>
  );
};

export default Header;
